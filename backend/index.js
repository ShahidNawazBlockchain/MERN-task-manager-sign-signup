const express = require("express");
const db = require("./db");
const cors = require("cors");
const auth = require("./routes/auth");
const list = require("./routes/list");
db();
const app = express();
app.use(express.json());
app.use(express.json());

app.use(cors());

app.use("/api/v1", auth);
app.use("/api/v2", list);
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server is lisinting at ${PORT}`);
});

//http://localhost:4000/api/v1/register
