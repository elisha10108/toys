const express = require("express");

const router = express.Router();

router.get("/", (res) => {
  res.json({msg:"index work"});
})

module.exports = router;