const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema takes an object as an argument
const AuthorSchema = new Schema ({
    name: {
        type: String,
        required: true //this is a form of validation we are putting inside the schema
    },
    bio: {
        type: String,
        default: ""  //this is a form of validation we are putting inside the schema. we can even say default is "No bio"
    },
    gender: {
        type: String,
        enum: ['male','female', 'non binary'], //this restricts choices for user input
        default: 'non binary'
    }
});

module.exports = AuthorSchema;