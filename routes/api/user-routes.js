const router = require('express').Router();

const {
    postNewUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');


const {
    addFriend,
    deleteFriend
} = require('../../controllers/friend-controller');


// route to /api/user
router.route('/').post(postNewUser).get(getAllUsers);


// route to /api/user/:id
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);


// route to /api/user/:userId/friends/friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;