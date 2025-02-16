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