import { createRestaurent, getRestaurant } from "../Controller/Restaurant.controller.js"
function routes(app){
    app.post("/api/restaurant", createRestaurent);
    app.get("/restaurants" , getRestaurant);
}

export default routes