import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Category from "./category.model.js";
let Course = sequelize.define('course',{ 
   name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   description: {
     type: DataTypes.TEXT,
     allowNull: false,
   },
   categoryId: {
     type: DataTypes.INTEGER,
     allowNull: false,
     references: {
       model:Category,
       key: 'id',
     },
   },
   lessonCount: {
     type: DataTypes.INTEGER
    
   },
   continue: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   image: {
     type: DataTypes.STRING,
   },
 },
);

Category.hasMany(Course,{foreignKey:"categoryId"})
Course.belongsTo(Category,{foreignKey:"categoryId"})
export default Course