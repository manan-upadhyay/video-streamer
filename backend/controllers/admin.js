const { validationResult } = require("express-validator");
const Video = require("../models/video");

exports.postAddVideo = (req, res, next) => {
  const { title, link, description, thumbnail } = req.body;

  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //creating a product to DB
  const video = new Video({
    title,
    link,
    description,
    thumbnail,
  });

  video
    .save()
    .then((result) => {
      return res.status(200).json({ data: result });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
