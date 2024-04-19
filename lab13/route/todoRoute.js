const express = require("express");
const router = express.Router();

router.get("/req-params/:id/:name", (req, res, next) => {
  res.send(req.params);
});

router.get("/req-search", (req, res, next) => {
  res.send(req.query);
});

router.use("/req-body", (req, res, next) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
