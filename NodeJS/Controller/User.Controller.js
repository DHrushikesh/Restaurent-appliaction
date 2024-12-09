import UserSchemaModel from "../model/User.Mode.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export function Register(req,res){
    const { username , password } = req.body;

    UserSchemaModel.findOne({username}).then((data)=>{
        if(data){
            return res.staus(409).json({message:"User Already exists"})
        }
        else{
            const newUser = new UserSchemaModel({
                username , password: bcrypt.hashSync(password,10)
            })
            newUser.save().then((data)=>{
                res.status(200).json({message:data})
            }).catch(error => res.status(500).json({message:error.message}))
        }
    }
    )    
}

export function login(req,res){
    const { username , password } = req.body;

    UserSchemaModel.findOne({username}).then((data)=>{
        if(!data){
       return res.status(404).json({message:"Not user Exists"})
        }
        
        const passisvalid = bcrypt.compareSync(password,data.password)

        if(!passisvalid){
            return res.status(403).json({messgae:"invalid passWord Access Restricted"})
        }

        let token = jwt.sign( {id:data._id} , "AnythingSeccret" , {expiresIn:"10m" })

        res.send({messgae:{username : data.username}, acesstoken : token }
        )
    }
).catch((error)=>res.send({message:error}))   

}