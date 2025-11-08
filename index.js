const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Learn Express",
  });
});

app.use((req, res) => {
  res.status(500).json({ message: "Not Yet build" });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
