const Video = require("../models/video");

//get all the videos
exports.getVideos = async (req, res, next) => {
  try {
    const videos = await Video.find();
    res.json({ data: videos, message: "Videos retrieved successfully" });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};
