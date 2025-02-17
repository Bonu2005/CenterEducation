<<<<<<< HEAD
import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'qwerty',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'root',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql', 
    port: process.env.DB_PORT || 3306,
  }
);

export default sequelize;
=======
import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
    host:"localhost",
    username:"root",
    password:"bonu2005",
    database:"project",
    dialect:"mysql",
    logging:false
})
export default sequelize
>>>>>>> c200e6fcbccd5956d88d12c1238d003f878c6f58
