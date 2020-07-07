const express = require("express");
const path = require("path");

const app = express();


app.use(express.static(path.join(__dirname, "dist")));
const PORT=7000

app.listen(PORT,() => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
// console.log(app)