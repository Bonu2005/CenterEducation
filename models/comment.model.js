import { DataTypes } from "sequelize";
import sequalize from "../config/db.js";
import User from "./user.model.js";
import Course from "./course.model.js";

let Comment = sequalize.define('comment', {
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    star: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    courseId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: Course,
        key: 'id',
      },
    },
  },
  
);

export default Comment