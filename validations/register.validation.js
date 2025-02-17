import joi from 'joi';

function registerValidation(data){
    const registeration = joi.object({
        fullname: joi.string().min(2).max(20).required(),
        password: joi.string().min(8).max(15).required(),
        email: joi.string().min(10).max(30).required(),
        experience: joi.string().min(3).max(20).optional(),
        image: joi.string().min(10).max(20).optional().allow(null),
        type: joi.string().min(4).max(10).optional().allow(null),
        role: joi.string().min(4).max(10).optional().allow(null),
        status: joi.string().min(4).max(10).optional(),

    });
    return registeration.validate(data,{abortEarly:true});
}

export default registerValidation;
