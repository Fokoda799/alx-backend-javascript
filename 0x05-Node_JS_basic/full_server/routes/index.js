// module imports
import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

// instantiate controllers
const router = express.Router();
// const appController = new AppController();
// const studentsController = new StudentsController();

// middlewares and config
// Handle form submissions with URL encoded data
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Homepage route using AppController
router.get('/', AppController.getHomepage);

// Students route using StudentsController
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

// export router
module.exports = router;
