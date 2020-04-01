const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Joke setup is required"],
        minlength: [3, "Joke setup must be at least 3 characters"]
    },
    punchline: {
        type: String,
        required: [true, "Joke punchline is required"],
        minlength: [2, "Joke punchline must be at least 2 characters"]
    }
}, { timestamps: true });

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;