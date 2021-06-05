const { User, Thought, Reaction } = require('../models');

const userController = {

    //post a new user
    postNewUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json({ message: err }));
    },

    // get all users
    getAllUsers(req, res) {
        User.find({})
            .sort({ _id: -1 })
            .select('-__v')
            .then(dbAllUserData => res.json(dbAllUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },


    // get a single user
    getSingleUser({ params }, res) {
        User.findOne({ _id: params.id })
            // .populate(
            //     {
            //         path: 'thoughts',
            //         select: '-__v'
            //     },
            //     {
            //         path: 'friends',
            //         select: '-__v'
            //     }
            // )
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this ID!' });
                    return;
                }

                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },


    // UPDATE User data
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUpdatedUserData => {
                if (!dbUpdatedUserData) {
                    res.status(404).json({ message: 'No user found with this ID! ' });
                    return;
                }

                res.json(dbUpdatedUserData);
            })
            .catch(err => res.status(400).json(err));
    },


    // DELETE User Data
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this ID! ' });
                    return;
                }

                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    }

};


module.exports = userController;