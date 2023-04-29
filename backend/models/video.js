const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description title is required"],
    },
    link: {
      type: String,
      required: [true, "Link is required"],
    },
    thumbnail: {
      type: String,
      required: [true, "Thumbnail is required"],
    },
  },
  { timestamps: true }
);

videoSchema.plugin(uniqueValidator, { message: "{PATH} must be unique" });

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
