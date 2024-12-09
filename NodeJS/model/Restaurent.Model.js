import mongoose from "mongoose";

const { Schema } = mongoose;

const restaurantSchema = new Schema({
    id:Number,
    name:String,
    rating:Number,
    imgurl:String,
    DeliveryTime:String,
    Area:String
})

const RestaurentCards = mongoose.model("RestaurentCards" , restaurantSchema)

export default RestaurentCards;