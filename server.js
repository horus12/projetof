var express = require("express");
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

(port = process.env.PORT || 3000),
  (mongoose = require("mongoose")),
  (User = require("./api/domain/user")),
  (Research = require("./api/domain/research")),
  (bodyParser = require("body-parser"));


mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/projetoF"
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/routes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("todo list RESTful API server started on: " + port);
