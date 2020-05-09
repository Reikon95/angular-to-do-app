var express = require("express");
var todoController = require("./controllers/todocontroller");
var app = express();

// set up template engine
app.set("view engine", "ejs");

//static files
app.use(express.static("./public"));

//Listen to the port
app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
