const express = require('express');
const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      // Data processing logic
      const lines = data.split('\n').filter((line) => line !== '');
      const columns = lines.shift().split(',');
      const students = lines.map((line) => line.split(','));
      const fieldIndex = columns.indexOf('field');
      const CSstudents = students.filter((student) => student[fieldIndex] === 'CS').map((student) => student[0]);
      const SWEstudents = students.filter((student) => student[fieldIndex] === 'SWE').map((student) => student[0]);

      // Building the result array
      const result = [];
      result.push(`Number of students: ${students.length}`);
      result.push(`Number of students in CS: ${CSstudents.length}. List: ${CSstudents.join(', ')}`);
      result.push(`Number of students in SWE: ${SWEstudents.length}. List: ${SWEstudents.join(', ')}`);

      // Resolving the promise with the result array
      resolve(result);
    });
  });
}

const app = express();
const port = 1245;

app.get('/', (req, res) => res.send('Hello Holberton School!'));

app.get('/students', async (req, res) => {
  try {
    const data = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${data.join('\n')}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(port, () => console.log(`simple express app listening on port ${port}!`));

module.exports = app;
