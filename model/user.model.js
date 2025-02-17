import {DataTypes} from "sequelize";
import sequelize from "../config/db.js"; 

let User = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    experience: {
        type: DataTypes.STRING,
        defaultValue: "No experience"
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM('student', 'teacher', "This is admin"),
        defaultValue: "This is admin"
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false,
        defaultValue: 'user'
    },
    status:{
        type: DataTypes.ENUM("passive","active"),
        allowNull: false,
        defaultValue: "passive"
    },

})

export default User

