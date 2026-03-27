const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const validateStudent = require('../middlewares/validateStudent');

// RESTful routes with validation
router.get('/', studentController.getAllStudents);
router.get('/add', studentController.getAddForm);
router.post('/', validateStudent, studentController.createStudent);
router.get('/:id/edit', studentController.getEditForm);
router.put('/:id', validateStudent, studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);
router.get('/:id', studentController.getStudentById);

module.exports = router;