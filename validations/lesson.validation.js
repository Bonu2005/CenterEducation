import Joi from "joi";

export function lessonValidate(data){
    let Schema = Joi.object({
        courseId:Joi.number().required(),
        description:Joi.string().required(),
        link:Joi.string().required()
    })
    return Schema.validate(data,{abortEarly:false})
}