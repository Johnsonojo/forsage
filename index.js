const express = require("express");
const path = require("path");

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.static("public"));

app.all("*", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.listen(PORT, () => console.log(`app listening on port: ${PORT}`));
