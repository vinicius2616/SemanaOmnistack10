
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://vinicius:123@cluster0-3odps.mongodb.net/week10?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.use(cors());
app.use(express.json());
app.use(routes);

//METODS HTTP
//get:receber informacao
//post:criar informacao
// put:editar recurso
//delete: apagar

//PARAMETROS
//Query: request.query(filtros,ordenacao, paginacao)
//Route: request.params(identificar um recurso na alteração ou remoçao)
//Body: request.body(Dados para criacao ou alteracao de um registro)


                //ARROW FUNCTIONS


app.listen(3333);

