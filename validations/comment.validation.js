import Joi from "joi";

export function commentValidate(data){
    let Schema = Joi.object({
        comment:Joi.string().required(),
        userId:Joi.number().required(),
        star:Joi.number().required(),
        courseId:Joi.number().required()
    })
    return Schema.validate(data,{abortEarly:false})
}