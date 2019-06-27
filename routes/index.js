const express = require("express");
const router = express.Router();
const Story = require("../models/Story");

/* GET home page */
router.get("/", (req, res, next) => {
  Story.find({}).then(stories => {
    // console.log("DEBUG stories" + stories[0].content);
    res.render("index", {
      stories: stories,
      message: req.query.error
    });
  });
});

/* Redirect the post */
router.post("/add-story", (req, res, next) => {
  console.log("req.body", req.body);
  let sentence = req.body.sentence;
  let name = req.body.name;
  // let date = date.getHours();
  if (sentence && name) {
    Story.create({
      content: sentence,
      writer: name
    }).then(() => {
      res.redirect("/");
    });
  } else {
    res.redirect("/?error=*Please complete all fields");
  }
});

module.exports = router;
