import User from "../models/UserModel.js";
import path from "path";
import fs from "fs";

export const getUsers = async(req, res)=>{
    try {
        const response = await User.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserById = async(req, res)=>{
    try {
        const response = await User.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveUser = (req, res)=>{
    const tname = req.body.title;
    const desc = req.body.desc;
    try {
        // await User.create({name: name});
        User.create({username: tname,description:desc});
        res.status(201).json({msg: "User Created Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
    

}

export const updateUser = async(req, res)=>{
    const user = await User.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "No Data Found"});
    
    const name = req.body.title;
    const desc = req.body.desc;

    
    try {
        User.update({username: name, description: desc},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}


export const deleteUser = async(req, res)=>{
    const user = await User.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "No Data Found"});

    try {
        User.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}