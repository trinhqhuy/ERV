const express = require("express");
const app = express();
const port = 3000;
app.use(express.static(process.cwd() + "/views"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
