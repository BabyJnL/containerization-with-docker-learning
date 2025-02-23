const router = require('express').Router();

router.use('/lecturers', require('./lecturers'));

module.exports = router;