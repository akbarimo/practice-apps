const router = require('express').Router();
const {words} = require('./controllers');

// Routs incoming get requests with the endpoint '/words' to the controller with the create function
router.get('/words', words.get);

// Routs incoming post requests with the endpoint '/words' to the controller with the post function
router.post('/words', words.post);

// Routs incoming patch requests with the endpoint '/words' to the controller with the update function
router.patch('/words', words.update);

// Routs incoming post requests with the endpoint '/words' to the controller with the remove function
router.delete('/words', words.remove);

module.exports = router;