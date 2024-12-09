import { createSlice } from "@reduxjs/toolkit";

const restaurantDetails = createSlice({
    name: "RestaurantNames",
    initialState:{
        Restaurants:[]
    },
    reducers:{
        AddtoStore:(state,action)=>{
            state.Restaurants.push(action.payload)
        }
    }

})

export const { AddtoStore } = restaurantDetails.actions;
export default restaurantDetails.reducer 