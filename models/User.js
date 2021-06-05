const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: 'Username is required!',
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        matches: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}/i
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
        }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
},

    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);


UserSchema.virtual('friendCount').get(function () {
    if (this.friends) {
        return this.friends.length;
    }
});

const User = model('User', UserSchema);

module.exports = User;