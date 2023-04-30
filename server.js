const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const port = process.env.PORT || "3000";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", routes);

app.get("/blogs", (req, res) => {
  blogService.get(req, res);
});

app.listen(port, () => console.log(`API running on localhost:${port}`));
