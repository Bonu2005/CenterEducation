import Category from "../models/category.model.js";
import { categoryValidate } from "../validations/category.validation.js";

async function findAll(req,res) {
    try {
        let findAll = await Category.findAll({
        });
        res.json({ message: findAll });
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
async function findOne(req,res) {
    try {
        try {
            let {id}= req.params
            let findOne = await Category.findByPk(id)
            res.json({message:findOne})
        } catch (error) {
            res.status(400).json({message:error.message})
        }
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
        let find = await Category.findAll({where :query})
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


        let users = await Category.findAll({
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
        let {error}=categoryValidate({...data})
        if(error){
           
            return res.status(400).json({message:error.details})
        }
       
         await roomModel.create(data)
        res.json({message:"Successfully created"})
    } catch (error) {
      
        res.status(400).json({message:error.message})
    }
}
async function update(req,res) {
    try {
        let {id}= req.params
        let data = req.body
        await productModel.update(data,{where:{id}}) 
        res.json({message:"successfully updated"})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
async function remove(req,res) {
    try {
        let {id} = req.params
        await orderModel.destroy({where:{id}})
        res.json({message:"Successfully removed"})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
export {findAll,findOne,Pagination,findByQuery,create,update,remove}