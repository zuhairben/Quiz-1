const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    admin: {
        type: Boolean,
    },
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
    }
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;