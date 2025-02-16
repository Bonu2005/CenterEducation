import Joi from "joi";

export function courseValidate(data){
    let Schema = Joi.object({
        name:Joi.string().max(18).min(2).required(),
        description:Joi.string().required(),
        categoryId:Joi.number().required(),
        userId:Joi.number().required(),
        comment:Joi.string().required(),
        lessonCount:Joi.number().required(),
        continue:Joi.number().required(),
        image:Joi.string().optional()
    })
    return Schema.validate(data,{abortEarly:false})
}