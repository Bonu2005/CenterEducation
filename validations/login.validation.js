import joi from 'joi';

function loginValidation(data){
    const logins = joi.object({
        password: joi.string().min(8).max(15).required(),
        email: joi.string().min(10).max(30).required()
    });
    return logins.validate(data,{abortEarly:true});
}

export default loginValidation;