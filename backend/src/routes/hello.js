const express = require("express");
const router = express.Router();

// GET example
router.get("/", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

module.exports = router;
