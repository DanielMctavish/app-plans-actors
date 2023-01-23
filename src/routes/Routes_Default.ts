import { Router } from "express";
import {Actors} from "../app/core/usecases/ActorsCase"
const routes = Router();
const actorsUsescases = new Actors()


routes.get('/', (req, res) => {
    return res.status(200).json({ message:'Success!'})
})

routes.post('/createactor',async (req,res)=>{
    await actorsUsescases.CreateActor(req.body).then(response=>{
        return res.status(response.status).json(response.message) 
    })
})


export default routes;