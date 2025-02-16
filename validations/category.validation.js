import Joi from "joi";

export function categoryValidate(data){
    let Schema = Joi.object({
        name:Joi.string().max(18).min(2).required(),
        description:Joi.string().required()
    })
    return Schema.validate(data,{abortEarly:false})
}