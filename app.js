const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost/books_r_us", { useNewUrlParser: true});
mongoose.Promise = global.Promise;

mongoose.connection.on("error", error => console.log(error));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//middleware always added to app.js
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//method override package
app.use(methodOverride("_method", {methods: ["POST", "GET"]}));

app.use(require("./routes"));

app.listen(port, () => console.log(`Server listening on port ${port}`));

