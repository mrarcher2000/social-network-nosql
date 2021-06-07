const router = require('express').Router();

const {
    allThoughts,
    createThought,
    getSingleThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');


const {
    addReaction,
    deleteReaction
} = require('../../controllers/reaction-controller');


// routes to /api/thoughts
router.route('/').get(allThoughts).post(createThought);


//routes to /api/thoughts/:thoughtId
router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought);


// routes to /api/thoughts/:thoughtId/reactions
router.route('/:id/reactions').post(addReaction);


// routes to /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:id/reactions/:reactionId').delete(deleteReaction);


module.exports = router;