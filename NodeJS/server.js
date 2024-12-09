import mongoose from "mongoose";
import express from "express";
import routes from "./Routes/Restaurats.Routes.js";
import cors from "cors"
import { userRoutes } from "./Routes/User.Routes.js";
// import RestaurentCards from "./model/Restaurent.Model.js";


mongoose.connect("mongodb+srv://hrushikesh:klausyt2003@cluster0.efvmx.mongodb.net/")

console.log("Here I am Next")

const db = mongoose.connection;

db.on("open",()=>{
    console.log("Connection SuccessFully")
})

db.on("error",(error)=>{
    console.log(error, "Found this error")
})

const app = express();


app.listen("3000",()=>{
    console.log("Listening Here in Server 3000")
})

app.use(express.json());
app.use(cors())

routes(app)
userRoutes(app)






// await RestaurentCards.create({
//     id : 1,
//     name :"Boom Sandwich",
//     rating : 4.5,
//     imgurl : "/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/c5bbd782-00ef-45a8-aae7-ed1f86cee653_692209.JPG",
//     DeliveryTime : "30-40 mins",
//     Area : "Yosufguda"
// })

// console.log(await RestaurentCards.find())










