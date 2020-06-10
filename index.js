express = require("express");
fs = require("fs");
const app = express();
let rawdata = fs.readFileSync("data.json");
let data = JSON.parse(rawdata);
app.listen(3000, () => {
  console.log("listen 3000");
});
app.use(express.static("public"));

app.get("/data", function (req, res) {
  res.send(data);
});
