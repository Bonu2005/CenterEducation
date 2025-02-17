import {DataTypes} from "sequelize";
import sequelize from "../config/db.js"; 

let Lesson = sequelize.define('Darslar', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Courses', 
          key: 'id',
        }, 
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
      },
    },
   
},{timestamps:true})

export default Lesson;