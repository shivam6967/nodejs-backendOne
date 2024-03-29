import { Task } from "../models/tasks.models.js";
import mongoose from "mongoose"

export const newTask = async (req, res , next) => {
    const { tittle , description } = req.body;

    await Task.create({
        tittle,
        description,
        user: req.user,
    });

    res.status(201).json({
        success:true,
        message: "Task Created Successfully"
    });
};

export const getMyTask = async (req , res , next ) => {

    const userid = req.user._id;
    const tasks = await Task.find({user: userid});

    res.status(200).json({
        success: true,
        tasks,
    });
};

export const updateTask = async (req , res , next ) => {

    const task = await Task.findById(req.params.id);
    
    if(!task){
        return next(new Error("Invalid ID"));
    };

    task.isCompleted = !task.isCompleted;

    await task.save();


    res.status(200).json({
        success: true,
        message: "Task Updated",
    });
};

export const deleteTask = async (req , res , next ) => {

    const { id } = req.params;

    const task = Task.findById(id);

    if(!task){
        return next(new Error("Error during Deleting the Task"))
    };

    await task.deleteOne();

     res.status(200).json({
        success: true,
        message: "Task Deleted",
    });
};