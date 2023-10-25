const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    thought: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);