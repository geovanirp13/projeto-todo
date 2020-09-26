//Importando os pacotes
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//Configurar o app para usar o bodyParser e transformar as requisições em json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Persistencia
const connectionString = "mongodb+srv://GeovaniRagazzi:13091994@cluster0.8klg9.mongodb.net/todo?retryWrites=true&w=majority";
mongoose.connect(connectionString, {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false});

//Definir porta onde o server responderá
const port = process.env.PORT || 3000;

const costumerRoute = require('./src/routes/costumer-route');

//rota para produtos
app.use('/api/costumers/', costumerRoute);

app.listen(port, () => {
  console.log(`Servidor execuTando na porta ${port}`);
});