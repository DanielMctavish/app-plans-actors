"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ActorsCase_1 = require("../app/core/usecases/ActorsCase");
const routes = (0, express_1.Router)();
const actorsUsescases = new ActorsCase_1.Actors();
routes.get('/', (req, res) => {
    return res.status(200).json({ message: 'Success!' });
});
routes.post('/createactor', (req, res) => {
    actorsUsescases.CreateActor(req.body).then(response => {
        //console.log("!!!!!!resposta na rota!!!!!!", response);
        return res.status(200).json({ message: 'Autor criado com sucesso!' });
    });
});
exports.default = routes;
