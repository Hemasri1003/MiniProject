const express = require("express");
const cors = require("cors");

const marksRoutes = require("./routes/marksRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", marksRoutes);

app.get("/test", (req, res) => {
  res.json({ message: "Backend API working" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});