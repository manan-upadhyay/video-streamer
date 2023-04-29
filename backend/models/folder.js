const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const folderSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Folder title is required"],
    },
    videos: [
      {
        video: { type: Object, required: true },
      },
    ],
  },
  { timestamps: true }
);

folderSchema.plugin(uniqueValidator, { message: "{PATH} must be unique" });

const Folder = mongoose.model("Folder", folderSchema);

module.exports = Folder;
