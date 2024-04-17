import React, { useState } from 'react';

const Filtro = () => {
  const [nombre, setNombre] = useState('');
  const [destino, setDestino] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Construye los datos a enviar al servidor
    const data = {
      nombre: nombre,
      destino: destino,
      precio: precio,
      cantidad: cantidad
    };

    
    fetch('/filtrarViajes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }
      return response.json();
    })
    .then(datosFiltrados => {
      
      console.log(datosFiltrados);
      
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <h2>Filtro de Viajes</h2>
      <form id="filtroForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre del Cliente:</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="destino">Destino:</label>
          <input type="text" id="destino" name="destino" value={destino} onChange={(event) => setDestino(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio Máximo:</label>
          <input type="number" id="precio" name="precio" value={precio} onChange={(event) => setPrecio(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="cantidad">Cantidad de Personas:</label>
          <input type="number" id="cantidad" name="cantidad" value={cantidad} onChange={(event) => setCantidad(event.target.value)} />
        </div>
        <button type="submit">Filtrar</button>
      </form>
    </div>
  );
};

export default Filtro;