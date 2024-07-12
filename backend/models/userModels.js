import { Sequelize, STRING } from "sequelize";
import db from '../config/database.js'

const dataTypes = Sequelize;

const user =  db.define('users', {
    name: dataTypes.STRING,
    email: dataTypes.STRING,
    gender: dataTypes.STRING,
},{
    freezeTableName:true
});

export default user;
(async()=>{
    await db.sync();
})()