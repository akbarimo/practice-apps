const router = require('express').Router();
const {words} = require('./controllers');

// Routes incoming get requests with the endpoint '/words' to the controller with the create function
router.get('/words', words.get);

// Routes incoming post requests with the endpoint '/words' to the controller with the post function
router.post('/words', words.post);

// Routes incoming patch requests with the endpoint '/words' to the controller with the update function
router.patch('/words', words.update);

// Routes incoming post requests with the endpoint '/words' to the controller with the remove function
router.delete('/words', words.remove);

module.exports = router;