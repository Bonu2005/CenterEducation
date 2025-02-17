import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
let User = sequelize.define('user', {
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
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM('admin', 'user', 'student', 'teacher'),
        allowNull: false,
        defaultValue: 'user'
    }
})


export default User