import { Router } from "express";
import {Actors} from "../app/core/usecases/ActorsCase"
const routes = Router();
const actorsUsescases = new Actors()


routes.get('/', (req, res) => {
    return res.status(200).json({ message:'Success!'})
})

routes.post('/createactor',(req,res)=>{
    actorsUsescases.CreateActor(req.body).then(response=>{
        //console.log("!!!!!!resposta na rota!!!!!!", response);
        return res.status(200).json({ message:'Autor criado com sucesso!'}) 
    })
})


export default routes;