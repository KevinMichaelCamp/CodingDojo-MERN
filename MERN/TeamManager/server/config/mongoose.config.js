const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/team_manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the databse"))
    .catch(err => console.log("Somthing went wrong when connecting to the database", err));
