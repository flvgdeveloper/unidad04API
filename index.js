const express = require('express'); // Aqui se va a utilizar express en el proyecto 
const bodyParser = require('body-parser');
const { conexionBD } = require("./db");

const app = express(); // convertir en un objeto para utilizar todas las herramientas disponibles

app.use(bodyParser.json());
conexionBD();

require("./rutas/categoryRutas")(app); // se cargan los archivos de rutas de categorias y se envia la variable app
require("./rutas/productRutas")(app);

app.listen(7777, () => {
    console.log("Inicializo servidor http");
})

