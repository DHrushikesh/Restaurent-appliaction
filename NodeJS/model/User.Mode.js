import mongoose from "mongoose";

const { Schema } = mongoose
 
const UserSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const UserSchemaModel =  mongoose.model("UserCredentials", UserSchema)

export default UserSchemaModel