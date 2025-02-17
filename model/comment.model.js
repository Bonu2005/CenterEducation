import {DataTypes} from "sequelize";
import sequelize from "../config/db.js"; 

let Comment = sequelize.define('Comments', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    star: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Courses',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Comment',
    tableName: 'Comments',
    timestamps: false,
  }
);

export default Comment;
