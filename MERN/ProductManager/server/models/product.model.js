const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title is required"],
        minlength: [3, "Product title muist be at least 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
    },
    description: {
        type: String,
        required: [true, "Product description is required"]
    }
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);