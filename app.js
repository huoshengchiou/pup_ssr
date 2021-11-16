const express = require("express");
const ssr = require("./ssr");
const app = express();
const port = 5000;

app.use(express.static("public"));

app.use("/a", async (req, res) => {
  const html = await ssr(`${req.protocol}://${req.get("host")}/a.html`);
  return res.status(200).send(html);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/a", (req, res) => {
//   res.send("./a.html");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
