const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Importa las rutas

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.use('/api', routes);


app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
