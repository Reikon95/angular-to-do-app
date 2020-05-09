var express = require("express");
var app = express();

// set up template egine
app.set("view engine", "ejs");

app.use(express.static("./"));

//Listen to the port
app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
