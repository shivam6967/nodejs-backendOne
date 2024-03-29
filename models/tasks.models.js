import mongoose from "mongoose";

// User Schema : 

const schema = new mongoose.Schema({
    tittle: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

export const Task = mongoose.model("Task" , schema);
