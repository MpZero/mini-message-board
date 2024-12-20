const express = require("express");
const app = express();

const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/index");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port: ${port}`));
