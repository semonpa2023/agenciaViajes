const express = require('express');
const router = express.Router();


router.post('/guardarDatosFormulario', (req, res) => {
  const { nombre, destino, precio, cantidad } = req.body;

  const nuevoViaje = {
    nombre: nombre,
    destino: destino,
    precio: precio,
    cantidad: cantidad
  };
  try {
    
    const datos = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'usuarios.json'), 'utf-8'));

    
    datos.viajes.push(nuevoViaje);

    fs.writeFileSync(path.resolve(__dirname, 'usuarios.json'), JSON.stringify(datos));

    
    res.status(200).send('Datos guardados correctamente');
  } catch (error) {
    console.error(error);
    
    res.status(500).send('Error al guardar los datos');
  }
});

module.exports = router;


 