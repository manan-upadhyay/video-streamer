const Folder = require("../models/folder");
const Section = require("../models/section");
const Video = require("../models/video");

//get all the sections
exports.getSections = async (req, res, next) => {
  try {
    const sections = await Section.find().populate("folders");
    res.json({ data: sections, message: "Sections retrieved successfully" });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

//get all the folders
exports.getFolders = async (req, res, next) => {
  try {
    const folders = await Folder.find().populate("videos");
    console.log("folders", folders);
    res.json({ data: folders, message: "Folders retrieved successfully" });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

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
