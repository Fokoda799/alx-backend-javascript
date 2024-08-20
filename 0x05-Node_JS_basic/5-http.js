const http = require('http');
const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const result = [];
      const lines = data.split('\n').filter((line) => line !== '');
      const columns = lines.shift().split(',');
      const students = lines.map((line) => line.split(','));
      const fieldIndex = columns.indexOf('field');
      const CSstudents = students.filter((student) => student[fieldIndex] === 'CS').map((student) => student[0]);
      const SWEstudents = students.filter((student) => student[fieldIndex] === 'SWE').map((student) => student[0]);
      result.push(`Number of students: ${students.length}`);
      result.push(`Number of students in CS: ${CSstudents.length}. List: ${CSstudents.join(', ')}`);
      result.push(`Number of students in SWE: ${SWEstudents.length}. List: ${SWEstudents.join(', ')}`);
      resolve(result);
    });
  });
}

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    await countStudents(process.argv[2]).then((result) => {
      res.end(result.join('\n'));
    }).catch((error) => {
      res.end(error.message);
    });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
