import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required : true,
        trim: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        maxlength: 20,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 20
    }},
    {
    timestamps: true
}
)

const User = mongoose.model('User', UserSchema)

module.exports = User;