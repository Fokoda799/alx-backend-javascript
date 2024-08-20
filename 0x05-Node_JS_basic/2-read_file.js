const fs = require('fs');


function countStudents(path) {
  if (!path) {
    throw new Error('Cannot load the database');
  }
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line !== '');
    const columns = lines.shift().split(',');
    const students = lines.map((line) => line.split(','));
    const fieldIndex = columns.indexOf('field');
    const CSstudents = students.filter((student) => student[fieldIndex] === 'CS').map((student) => student[0]);
    const SWEstudents = students.filter((student) => student[fieldIndex] === 'SWE').map((student) => student[0]);
    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${CSstudents.length}. List: ${CSstudents.join(', ')}`);
    console.log(`Number of students in SWE: ${SWEstudents.length}. List: ${SWEstudents.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
