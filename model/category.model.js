import {DataTypes} from "sequelize";
import sequelize from "../config/db.js"; 


let Category = sequelize.define('Categories',{ 
     id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
});

export default Category;