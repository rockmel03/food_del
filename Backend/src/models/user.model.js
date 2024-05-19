import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        image: { type: String },
        cart: { default: {} },
    },
    { timestamps: true }
);

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
    this.password = bcrypt.hashSync(this.password, 12);
    next();
});

userSchema.methods.isPasswordCorrect = function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
    const data = {
        _id: this._id,
        username: this.username,
        email: this.email,
    };
    return jwt.sign(data, process.env.JWT_SECRET_KEY);
};

const User = mongoose.model("User", userSchema);

export default User;
