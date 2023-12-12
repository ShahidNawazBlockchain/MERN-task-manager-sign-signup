const express = require("express");
const db = require("./utils/db");
const cors = require("cors");
db();
const app = express();
app.use(cors());
const auth = require("./utils/routes/auth");
const list = require("./utils/routes/list");
app.use(express.json());
app.use("/api/v1", auth);
app.use("/api/v2", list);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server is lisinting at ${PORT}`);
});

//http://localhost:4000/api/v1/register
