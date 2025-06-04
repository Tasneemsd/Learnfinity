const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const UserSchema = new mongoose.Schema({
    name: String,
     username: { type: String, required: true, unique: true },
    password: String,
    email: String,
    dob: String,
    phnumber: Number,
    gender: String,
    university: String,
    course: String,
    year: String,
    check: Boolean,
    profileImage: String

});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    if (!this.password) {
        return next(new Error("Password is undefined"));
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

//📌 compare password

UserSchema.methods.comparePassword = function (userPassword){
    return bcrypt.compare(userPassword, this.password)
}

/*📌 userPassword is the parameter */








module.exports = mongoose.model("User", UserSchema);