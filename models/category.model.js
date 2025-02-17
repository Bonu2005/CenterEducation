import { DataTypes } from "sequelize";
import sequalize from "../config/db.js";
let Category = sequalize.define('category',{ 
   name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   description: {
     type: DataTypes.STRING,
     allowNull: false,
   }

})
export default Category
