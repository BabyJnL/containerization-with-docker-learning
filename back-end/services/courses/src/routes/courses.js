const router = require('express').Router();
const CourseController = require('../controller/CourseController');

router.get('/', CourseController.index);
router.post('/', CourseController.create);

module.exports = router;