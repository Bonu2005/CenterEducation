<<<<<<< HEAD
import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();
let parol = process.env.APP_PASSWORD;
import jwt from "jsonwebtoken";
import loginValidation from "../validations/login.validation.js";
import registerValidation from "../validations/register.validation.js";

async function register(req, res) {
    try {
        let {value, error} = registerValidation(req.body);
        if(error){
         return res.status(500).send({"xatolik":error.details[0].message});
        }
        let image = req.file ? req.file.filename : null;
        let {fullname, password, email, experience, type, role} = value;
        let data = await User.findOne({where:{email}});
        if(data){
            return res.status(500).send("You have already registered");
        }
        if(type!=="teacher"&&type!=="student"){
            return res.status(500).send('Type faqat "student" yoki "teacher" bolishi shart!');
        }
        if(type=="student"&&experience){
            return res.status(500).send("Studentlarda experience bo'lmaydi");
        }
        if(role==="admin"){
            return res.status(500).send(`Admin bo'lib ro'yxatdan o'tish taqiqlanadi!`);
        }
        let hashedPass = bcrypt.hashSync(password, 10);
        await User.create({fullname, password: hashedPass, email, experience, image, type, role});
        res.status(201).send({Success:"User successfully registered!, please activate your account."});

        
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "yusupovruzimuhammad4@gmail.com",
              pass: parol,
            },
          });

        await transporter.sendMail({
            from: "<yusupovruzimuhammad4@gmail.com>",
            to: email,
            subject: "Activate your account",  
            html: `<a href="http://localhost:3001/api/activate/${email}">Tap to activate account</a>`,
          });

    } catch (error) {
        res.status(403).send({"xatolik":error});
        console.log({error});
    }
}

async function activateAcc(req, res) {
    try {
        let {email} = req.params;
        let user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        await User.update({status:"active"}, {where:{email}});
        res.status(201).send("<h1>Your account activated successfully</h1>");
    } catch (error) {
        res.status(403).send({"error":error});
        console.log({"Xatolik":error});
    }
}

async function login(req, res) {
    try {
       let {value, error} = loginValidation(req.body);
       if(error){
        return res.status(500).send({"xatolik":error.details[0].message});
       }
       let {password, email} = value;
       let data = await User.findOne({where:{email}});
       if(!data){
        return res.status(500).send("wrong email or you have not registered, yet!");
       }
       if(data.status=="Passive"){
        return res.status(403).send("You have to activate your account, before login.");
       }
       let checkPass = bcrypt.compareSync(password, data.password);
       if(!checkPass){
        return res.status(403).send("Wrong password!");
       }
       let token = jwt.sign({id:data.id, role:data.role, email:data.email}, process.env.TOKENKEY);
       res.status(201).send({msg:"You're logged in successfully!", Malumotlar: data, Token: token});
    } catch (error) {
        return res.status(403).send({"Xatolik":error.message});
    }
}

async function findAll(req, res){
    try {
        let data = await User.findAll();
        if(data.length==0){
            return res.status(403).send("Empty table!");
        }
        res.status(200).send({data});
    } catch (error) {
        return res.status(403).send({"Xatolik":error.message});
    }
}

async function findOne(req, res){
    try {
        let {id} = req.params;
        let data = await User.findOne({where:{id}});
        if(!data){
            return res.status(403).send("User not found!");
        }
        res.status(200).send(data);
    } catch (error) {
        return res.status(403).send({"Xatolik":error.message});
    }
}

async function findBySearch(req,res) {
    try {
        let query = req.query;
        let keys = Object.keys(query);
        let values = Object.values(query);
        let nexQuery = {};
        values.forEach((val,index) => {
            if(val){nexQuery[keys[index]] = val;}
        });
        let users = await User.findAll({where : nexQuery});
        res.status(200).send({data:users});
    } catch (error) {
        console.log({error});     
    }
}

async function create(req, res) {
    try {
        let image = req.file ? req.file.filename: null;
        let {value, error} = registerValidation(req.body);
        if(error){
         return res.status(500).send({"xatolik":error.details[0].message});
        }
        let {fullname, password, email, experience, type, role, status} = value;

        role = role ? role.toLowerCase().trim() : null;
        status = status ? status.toLowerCase().trim() : null;


        let checkPasss = await User.findOne({where:{email}});

        if(checkPasss){
            return res.status(403).send("Bu email ro'yxatdan o'tib bo'lgan!.");
        }

        if(role!=="admin"){
            return res.status(403).send("Faqat admin yarata olasiz.");
        }

        if (role === "admin") {
            if (type) {
                return res.status(403).send("Adminda type bo'lishi mumkin emas.");
            }
            if (experience) {
                return res.status(403).send("Adminda experience bo'lishi mumkin emas.");
            }
        }

        if(!status){
            return res.status(403).send("Status kiritsh shart.");
        }

        let hash = bcrypt.hashSync(password, 10);

        let data = await User.create({fullname, password:hash, email, experience, image, type, role, status});
        res.status(201).send({Malumot:data});

    } catch (error) {
        res.status(500).send({"Xatolik":error.message});
    }
}

async function update(req, res) {
    try {
        let image = req.file ? req.file.filename: null;
        let {value, error} = registerValidation(req.body);
        if(error){
         return res.status(500).send({"xatolik":error.details[0].message});
        }
        let {id} = req.params;
        let {fullname, password, email, experience, type, role, status} = value;

        role = role ? role.toLowerCase().trim() : null;
        status = status ? status.toLowerCase().trim() : null;


        let checkPasss = await User.findOne({where:{id}});

        if(!checkPasss){
            return res.status(403).send("User not found");
        }

        if(role=="admin"){
            if(type){
               return res.status(403).send("Adminda type bo'lmaydi");
            }
            if(experience){
                return res.status(403).send("Adminda experience bo'lmaydi");
            }
        }

        if(role=="admin"){
            if(type===undefined){
               type = "This is admin";
            }
            if(experience===undefined){
                experience = "No experience";
            }
        }

        if(role=="user"){
            if(!type){
                return res.status(403).send("Userda type bo'lishi shart");
            }
            if(type=="teacher"&&!experience){
                return res.status(403).send("Teacherda tajriba bo'lishi shart");
            }

            if(type=="student"&&experience){
                return res.status(403).send("Studentda tajriba bo'lishi mumkin emas");
            }
        }

        if(type=="student"&&experience==undefined){
                experience = "No experience"
        }

        if(!status){
            return res.status(403).send("Status  bo'lishi shart.");
        }

        let hash = bcrypt.hashSync(password, 10);

        await User.update({fullname, password:hash, email, experience, image, type, role, status}, { where: { id: id } });
        res.status(201).send("Updated!");

    } catch (error) {
        res.status(500).send({"Xatolik":error.message});
    }
}

async function remove(req, res){
    try {
        let {id} = req.params;
        let data = await User.findOne({where:{id}});
        if(!data){
            return res.status(403).send("User not found!");
        }
        await User.destroy({where:{id}});
        res.status(200).send({"Deleted":data});
    } catch (error) {
        return res.status(403).send({"Xatolik":error.message});
    }
}



export {register, activateAcc, login, findAll, findOne, findBySearch, create, remove, update};
=======
async function findAll(req,res) {
    try {
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
async function findOne(req,res) {
    try {
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
async function findByQuery(req,res) {
    try {
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
async function Pagination(req,res) {
    try {
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
async function create(req,res) {
    try {
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
async function update(req,res) {
    try {
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
async function remove(req,res) {
    try {
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
export {findAll,findOne,Pagination,findByQuery,create,update,remove}
>>>>>>> c200e6fcbccd5956d88d12c1238d003f878c6f58
