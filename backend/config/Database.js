import {Sequelize} from "sequelize";

const db = new Sequelize('mern_test','root','',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;