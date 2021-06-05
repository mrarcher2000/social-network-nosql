const { User, Thought, Reaction } = require('../models');


const friendController = {

    // add new friend to user friend list
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $addToSet: { friends: params.friendId } },
            { runValidators: true, new: true }
        )
            .then(dbUpdatedUser => {
                if (!dbUpdatedUser) {
                    return res.status(404).json({ message: "One of the ID's in your request is incorrect! No user found!" });
                }

                res.json(dbUpdatedUser);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },


    // DELETE friend from User friend's list
    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { runValidators: true, new: true }
        )
            .then(dbUpdatedUser => {
                if (!dbUpdatedUser) {
                    return res.status(404).json({ message: "One of the ID's in your request is incorrect! No user found!" });
                }

                res.json(dbUpdatedUser);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }

};



module.exports = friendController;