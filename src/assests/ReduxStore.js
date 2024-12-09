import { configureStore } from "@reduxjs/toolkit"
import RestaurentDetails from "./RestaurantsSLice"

const store = configureStore({
    reducer: RestaurentDetails
})

export default store