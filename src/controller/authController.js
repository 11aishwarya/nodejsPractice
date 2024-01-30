const authModel = require("../model/authModel");

const signup = async(res , req) =>{
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
    if(!password){
        return res.send({ status: false ,message: "This is required"})
    }
}

const login = async(res , req) => {
    const {email , password} = req.body;

    if(!email){
        return res.send({status:false , message:"email is required"})
    }
    const verifyEmail = await authModel.findOne({email});
    console.log(verifyEmail)
    if(!verifyEmail){
        return res.send({status:false , message:"please signUp"}); 
    }
    if(!password){
        return res.send({status: false , message:"password is required"})
    }
    

}

module.exports = {signup , login};