const router = require('express').Router();
const {formControllers} = require('../controllers');

router.get('/forms', formControllers.get);

router.post('/forms', formControllers.post);

module.exports = router;