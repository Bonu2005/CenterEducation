import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Course from "./course.model.js";
let Lesson = sequelize.define('lesson', {
    courseId: {
        type: DataTypes.INTEGER,
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

Course.hasMany(Lesson,{foreignKey:"courseId"})
Lesson.belongsTo(Course,{foreignKey:"courseId"})
export default Lesson