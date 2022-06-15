import User from "../models/UserModel.js";
import Order from "../models/OrderModel.js";
import path from "path";
import fs from "fs";
import sequelize from "sequelize";

export const getOrders = async(req, res)=>{
    try {
        const response = await Order.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getOrderByUserId = async(req, res)=>{
    try {
        const response = await Order.findAll({
            include: [{
              model: User,
              through: {
                where: {user_id: req.params.id}
              }
            }]
          });

        
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveOrder = (req, res)=>{
    const tname = req.body.user_id;
    const torder = req.body.order;

    try {
        // await User.create({name: name});
        Order.create({user_id: tname,orders:torder});
        res.status(201).json({msg: "Order Created Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
    

}

export const updateOrder = async(req, res)=>{
    const order = await Order.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!order) return res.status(404).json({msg: "No Data Found"});
    
    const name = req.body.title;
    const desc = req.body.desc;

    
    try {
        Order.update({username: name, description: desc},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}


export const deleteOrder = async(req, res)=>{
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