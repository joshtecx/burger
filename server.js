const express = require("express");
const bodyParser = require("body-parser");
const expHbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname + "/public"));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", expHbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => {
    console.log("Server is listening on: http://localhost: " + PORT);
});