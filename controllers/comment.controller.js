import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";
import { commentValidate } from "../validations/comment.validation.js";

async function findAll(req,res) {
    try {
        let findAll = await Comment.findAll({
            include: [
                { model: User },  
                
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
        let findOne = await Comment.findByPk(id,{include:{model:User}})
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
        let find = await Comment.findAll({where :query,include:{model:User}})
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


        let users = await Comment.findAll({
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
        let {error}=commentValidate({...data})
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
        await Comment.update(data,{where:{id}}) 
       res.json({message:"Successfully updated"})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
async function remove(req,res) {
    try {
        let {id} = req.params
        let find = await Comment.findOne({where:{id}})
        console.log(find);
        await Comment.destroy({where:{id}})
        res.json({message:"Successfully removed"}) 
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
export {findAll,findOne,Pagination,findByQuery,create,update,remove}