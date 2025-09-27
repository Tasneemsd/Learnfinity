const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: String,
    phone: String,   // ✅ match frontend Register.jsx
    gender: String,
    university: String,
    course: String,
    year: String,
    check: Boolean,
    profileImage: String
  },
  { timestamps: true }
);

// 📌 Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// 📌 Compare password method
UserSchema.methods.comparePassword = function (userPassword) {
  return bcrypt.compare(userPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);
