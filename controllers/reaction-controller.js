const { User, Thought, Reaction } = require('../models');


const reactionController = {


    // create a reaction
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.id },
            { $addToSet: { reactions: body } },
            { reunValidators: true, new: true }
        )
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({message: 'No thought found with this ID!'});
                    return;
                }

                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },


    // delete a reaction
    deleteReaction({params}, res) {
        Thought.findOneAndUpdate(
            {_id: params.id},
            {$pull: {reactions: {reactionId: params.reactionId}}},
            {new: true}
        )
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({message: 'No thought found with this ID!'});
                return;
            }

            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }



};



module.exports = reactionController;