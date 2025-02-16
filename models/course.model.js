import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Category from "./category.model.js";
import User from "./user.model.js";
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
     type: DataTypes.NUMBER,
     allowNull: false,
     references: {
       model:Category,
       key: 'id',
     },
   },
   userId: {
     type: DataTypes.NUMBER,
     allowNull: false,
     references: {
       model:User,
       key: 'id',
     },
   },
   lessonsCount: {
     type: DataTypes.NUMBER,
     defaultValue: 0,
   },
   continue: {
     type: DataTypes.NUMBER,
     allowNull: false,
   },
   image: {
     type: DataTypes.STRING,
   },
 },
);

export default Course