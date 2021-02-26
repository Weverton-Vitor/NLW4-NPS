import 'reflect-metadata'
import './database'
import express from 'express';
import { router } from './routers';

const app = express();

/*
* GET => Buscar
* POST => Salvar
* put => Alterar
* DELETE => Deletar
* PATACH => Alteração expecifica
*/

// 1 param => Rota(recurso API)
// 2 param => resquest, response

/*
app.get("/", (request, response) => {
    //return response.send('Hello Word - NLW04');
    return response.json({message:'Hello Word - NLW04'})
    
})

app.post("/", (request, response) => {
    // Recebeu os dados para salvar
    return response.json({message:"Os dados foram salvos com sucesso!"})
})
*/

app.use(express.json());

app.use(router)

app.listen(3333, () => console.log("Server is running!"));