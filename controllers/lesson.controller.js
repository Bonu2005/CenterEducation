import Course from "../models/course.model.js";
import Lesson from "../models/lesson.model.js";
import { lessonValidate } from "../validations/lesson.validation.js";

async function findAll(req,res) {
    try {
        let findAll = await Lesson.findAll({
            include: [
                { model: Course },  
                
            ]
        });

        res.json({ message: findAll });
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
async function findOne(req,res) {
    try {
        let {id}= req.params
        let findOne = await Lesson.findByPk(id,{include:{model:Course}})
        res.json({message:findOne})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
async function findByQuery(req,res) {
    try {
        let query = req.query
        console.log(query);
        
        if(Object.keys(query).length === 0){
            return res.json({message:"Query is required"})
        }
        let find = await Lesson.findAll({where :query,include:{model:Course}})
        res.status(200).json({message:find})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
async function Pagination(req,res) {
    try {
        let { page, take } = req.query;


        let pageNumber = parseInt(page, 10) || 1;
        let takeNumber = parseInt(take, 10) || 10;

        let offset = (pageNumber - 1) * takeNumber;


        let users = await Lesson.findAll({
            limit: takeNumber,
            offset: offset
        });


        res.json({ data: users });

    } catch (error) {

        res.status(400).json({ error: error.message });
    }
}
async function create(req,res) {
    try {
       
        let {...data}=req.body
        let {error}=lessonValidate({...data})
        if(error){
            return res.status(400).json({message:error.details})
        }
        
         await Comment.create({...data})
        res.json({message:"Successfully created"})
    } catch (error) {
      
        res.status(400).json({message:error.message})
    }
}
async function update(req,res) {
    try {
        let {id}= req.params
        let data = req.body
        await Lesson.update(data,{where:{id}}) 
       res.json({message:"Successfully updated"})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
async function remove(req,res) {
    try {
        let {id} = req.params
        let find = await Lesson.findOne({where:{id}})
        console.log(find);
        await Lesson.destroy({where:{id}})
        res.json({message:"Successfully removed"}) 
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
export {findAll,findOne,Pagination,findByQuery,create,update,remove}