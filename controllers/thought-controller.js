const { User, Thought, Reaction } = require('../models');


const thoughtController = {

    // get all thoughts
    allThoughts(req, res) {
        Thought.find({})
            .sort({createdAt: -1})
            .then(dbAllThoughtData => res.json(dbAllThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            }) 
    },


    // create a new thought
    createThought({params, body}, res) {
        Thought.create(body)
            .then(({_id}) => {
                return User.findOneAndUpdate(
                    {_id: body.userId},
                    {$push: {thoughts: _id}},
                    {new: true}
                );
            })
            .then(dbNewThoughtData => {
                if (!dbNewThoughtData) {
                    res.status(404).json({ message: 'User was not found!'});
                    return;
                }

                res.json(dbNewThoughtData);
            })
            .catch(err => res.json(err));
    },


    // get a single thought by ID
    getSingleThought({params}, res) {
        Thought.findOne({ _id: params.id})
            .select('-__v')
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thoughts found with this ID!'});
                    return;
                }

                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },


    // Update Thought by _id
    updateThought({params, body}, res) {
        Thought.findOneAndUpdate(
            {_id: params.id},
            body,
            {new: true}
        )
            .then(dbUpdatedThought => {
                if (!dbUpdatedThought) {
                    res.status(404).json({message: 'No Thought found with this ID!'});
                    return;
                }

                res.json(dbUpdatedThought);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },


    // delete a thought by _id
    deleteThought({params}, res) {
        Thought.findOneAndDelete({_id: params.id})
            .then(dbDeletedThoughtData => {
                if(!dbDeletedThoughtData) {
                    res.status(404).json({message: 'No thought found with this ID!'});
                    return;
                }

                res.json(dbDeletedThoughtData);
            })
            .catch(err => res.status(400).json(err));
    }



};


module.exports = thoughtController;