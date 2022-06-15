import {Sequelize} from "sequelize";
import Order from "./OrderModel.js";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('tb_user',{
    username: DataTypes.STRING,
    description: DataTypes.STRING,

    
},{
    freezeTableName: true
});

User.associate = (Order) => {
    User.hasMany(Order.user_id,{foreignKey:'user_id'});
  };

export default User;

(async()=>{
    await db.sync();
})();

