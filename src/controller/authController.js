const authModel = require("../model/authModel");

const signup = async(req,res) => {
    const data = req.body;
    if(!data){
        return res.send({
            status:false,
            message: "Please provide all information",
        })
    }

    const {fname , lname , email , password} = data;
    if(!fname){
        return res.send({status: false,message: "This is required field"});
    }
    if(!lname){
        return res.send({ status: false ,message: "This is required"})
    }
    if(!email){
        return res.send({ status: false ,message: "This is required"})
    }
    const checkEmail = await authModel.findOne({email})
    if(checkEmail){
        return res.status(400).send({status:false,message:'email is already exist'});
    }
    
    if(!password){
        return res.send({ status: false ,message: "This is required"})
    }
    const savedData = await authModel.create(data);
    return res.send({status:true,result:savedData})
}

const login = async(req,res,) => {
    const data = req.body
    const {email , password} = data;

    if(!email){
        return res.send({status:false , message:"email is required"})
    }
    const verifyEmail = await authModel.findOne({email});
    console.log(verifyEmail)
    if(!verifyEmail){
        return res.send({status:false , message:"please signUp"}); 
    }
    if(verifyEmail.password !== password){
        return res.send({status: false , message:"password is required"})
    }
    return res.status(200).send({status:true,message:"you are login now", data:verifyEmail})

}

module.exports = {signup , login};