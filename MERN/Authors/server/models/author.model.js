const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required"],
        minlength: [3, "Author name must be at least 3 characters"]
    },
    quote: {
        type: String,
        required: [true, "Author quote is required"],
        minlength: [3, "Author quote must be at least 3 characters"]
    }
}, { timestamps: true });

module.exports.Author = mongoose.model('Author', AuthorSchema);