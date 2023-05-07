const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const sectionSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Section title is required"],
    },
    description: {
      type: String,
      required: [true, "Description title is required"],
    },
    folders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Folder" }],
  },
  { timestamps: true }
);

sectionSchema.plugin(uniqueValidator, { message: "{PATH} must be unique" });

const Section = mongoose.model("Section", sectionSchema);

module.exports = Section;
