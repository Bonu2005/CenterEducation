import Joi from "joi";

export function courseValidate(data){
    let Schema = Joi.object({
        fullname:Joi.string().max(18).min(2).required(),
        password:Joi.string().required(),
        email:Joi.string().required(),
        experience:Joi.string().required(),
        image:Joi.string().optional(),
        type:Joi.string().required()
    })
    return Schema.validate(data,{abortEarly:false})
}