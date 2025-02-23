const router = require('express').Router();
const LecturerController = require('../controller/LecturerController');

router.get('/', LecturerController.index);
router.post('/', LecturerController.create);

module.exports = router;