import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;
// User.hasMany(Order);


const Order = db.define('tb_order',{
    user_id: DataTypes.INTEGER,
    orders: DataTypes.STRING,
},{
    freezeTableName: true
});
export default Order;

(async()=>{
    await db.sync();
})();

