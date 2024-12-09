import { login, Register } from "../Controller/User.Controller.js";

export function userRoutes(app){
    app.post("/api/userRegister",Register)
    app.post("/api/login",login)
}