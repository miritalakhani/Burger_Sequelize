var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");

var db = require('./models');
db.sequelize.sync();

var app = express();
var PORT = 3000;



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//var routes = require("./routes/burger-api-routes.js");
var routes = require("./controllers/burgersController.js");

app.use("/", routes);
//require("./routes/burger-api-routes.js")(app);


app.listen(PORT, function(){
	console.log("listening on PORT: ", PORT)
});
