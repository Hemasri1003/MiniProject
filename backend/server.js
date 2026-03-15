const express = require("express");
const cors = require("cors");

const app = express();

const marksRoutes = require("./routes/marksRoutes");

app.use(cors());
app.use(express.json());

app.use("/api", marksRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});