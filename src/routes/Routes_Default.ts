import { Router } from "express";
const routes = Router();


routes.get('/', (req, res) => {
    res.send("página inicial")
})


export default routes;