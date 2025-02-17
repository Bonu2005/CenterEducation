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
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    star: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Course,
        key: 'id',
      },
    },
  },
  
);
User.hasMany(Comment,{foreignKey:"userId"})
Comment.belongsTo(User,{foreignKey:"userId"})
Course.hasMany(Comment,{foreignKey:"courseId"})
Comment.belongsTo(Course,{foreignKey:"courseId"})
export default Comment