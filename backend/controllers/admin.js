const { validationResult } = require("express-validator");
const Video = require("../models/video");
const Section = require("../models/section");
const Folder = require("../models/folder");

//add new section
exports.postAddSection = async (req, res, next) => {
  const { title } = req.body;

  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()?.[0].msg });
  }

  try {
    //creating a section to DB
    const section = new Section({ title });
    await section.save();
    res
      .status(200)
      .json({ data: section, message: "Section created successfully" });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

// add new folder
exports.postAddFolder = async (req, res, next) => {
  const { title, thumbnail, sectionId } = req.body;

  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()?.[0].msg });
  }

  try {
    // Check if section exists
    let section = await Section.findOne({ _id: sectionId });

    if (!section) {
      return res.status(400).json({ message: "Section does not exists" });
    }
    //creating a folder to DB
    const folder = new Folder({ title, thumbnail, sectionId });
    await folder.save();

    // Add the new folder to the corresponding section
    section.folders.push(folder);
    await section.save();

    res
      .status(200)
      .json({ data: folder, message: "Folder created successfully" });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};

//upload new video
exports.postAddVideo = async (req, res, next) => {
  const { title, link, description, thumbnail, sectionId, folderId } = req.body;

  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()?.[0].msg });
  }

  try {
    // Check if section and folder exists
    let section = await Section.findOne({ _id: sectionId });
    let folder = await Folder.findOne({ _id: folderId });

    if (!section) {
      return res.status(400).json({ message: "Section does not exists" });
    }
    if (!folder) {
      return res.status(400).json({ message: "Folder does not exists" });
    }

    //creating a video to DB
    const video = new Video({
      sectionId,
      folderId,
      title,
      description,
      thumbnail,
      link,
    });
    await video.save();

    // Add the new folder to the corresponding section
    folder.videos.push(video);
    await folder.save();

    res
      .status(200)
      .json({ data: video, message: "Video uploaded successfully" });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};
