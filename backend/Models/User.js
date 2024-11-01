const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
    // If  the password is not modified, skip the hashing process
    if (!this.isModified("password")) return next();
    // Hashing the user's password before saving it to the database to ensure security and prevent plain text passwords from being stored.
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = async function (password) {
    // Compare the provided password with the hashed password in the database to verify the user's identity.
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
