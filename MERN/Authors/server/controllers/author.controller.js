const { Author } = require('../models/author.model');

module.exports.getAuthors = (req, res) => {
    Author.find({}).sort({ name: 1 })
        .then(authors => res.json(authors))
        .catch(err => res.json(err));
}

module.exports.getAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.json(err));
}

module.exports.createAuthor = (req, res) => {
    const { name, quote } = req.body;
    Author.create({
        name,
        quote
    })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
        .then(author => res.json(author))
        .catch(err => {
            res.status(500).json(err);
            console.log("Update error:" + res.reason.message);
        })
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => res.json(err));
}