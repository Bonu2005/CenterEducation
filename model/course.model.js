import {DataTypes} from "sequelize";
import sequelize from "../config/db.js"; 


let Course = sequelize.define('Courses',{ 
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
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    lessonsCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    continue: {
      type: DataTypes.INTEGER,
      defaultValue: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
  },
  {
    sequelize,
    modelName: 'Course',
    tableName: 'Courses',
    timestamps: false,
  }
);

export default Course;
