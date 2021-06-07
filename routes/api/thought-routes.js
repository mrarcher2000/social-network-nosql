const router = require('express').Router();

const {
    allThoughts,
    createThought,
    getSingleThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');


// routes to /api/thoughts
router.route('/').get(allThoughts).post(createThought);


//routes to /api/thoughts/:thoughtId
router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought);


module.exports = router;