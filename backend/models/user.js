const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "FirstName is required"],
      minlength: [2, "FirstName must be at least 3 characters long"],
      maxlength: [50, "FirstName cannot be more than 50 characters long"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "LastName is required"],
      minlength: [2, "LastName must be at least 3 characters long"],
      maxlength: [50, "LastName cannot be more than 50 characters long"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      minlength: [6, "Email must be at least 6 characters long"],
      maxlength: [50, "Email cannot be more than 50 characters long"],
      lowercase: true,
      trim: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email is invalid"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      match: [
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and must be at least 8 characters long",
      ],
    },
    role: {
      type: Number,
      enum: [0, 1],
      default: 0,
    },
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator, { message: "{PATH} must be unique" });

const User = mongoose.model("User", userSchema);

module.exports = User;
