import mongoose from "mongoose";

// User Schema : 

const schema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        select: false,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

export const User = mongoose.model("User" , schema);
