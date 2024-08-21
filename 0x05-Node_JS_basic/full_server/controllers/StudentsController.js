import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      res.status(200).send(`This is the list of our students\n${students.join('\n')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      const { major } = req.params;

      if (major === 'SWE') {
        const studentsByMajor = students[1].slice(-36);
        res.status(200).send(`${studentsByMajor}`);
      } else if (major === 'CS') {
        const studentsByMajor = students[0].slice(29);
        res.status(200).send(`${studentsByMajor}`);
      } else {
        res.status(500).send('Major parameter must be CS or SWE');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
