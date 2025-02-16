import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Course from "./course.model.js";
let Lesson = sequelize.define('lesson', {
    courseId: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
          model: Course, 
          key: 'id',
        }, 
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   
},{timestamps:true})

export default Lesson