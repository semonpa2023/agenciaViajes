import React from 'react'
import '../componentes/Formulario.css'
import {Link} from "react-router-dom"

const Formulario = () => {
  return (
    <div>
        <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Formulario de Cliente</title>
        <h2>Formulario de Cliente</h2>
        <form id="clienteForm">
          <div>
            <label htmlFor="nombre">Nombre del cliente titular:</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div>
            <label htmlFor="lugar">Lugar que visita:</label>
            <input type="text" id="lugar" name="lugar" required />
          </div>
          <div>
            <label htmlFor="valor">Valor que pagó:</label>
            <input type="number" id="valor" name="valor" required />
          </div>
          <div>
            <label htmlFor="cantidad">Cantidad de personas que viajan:</label>
            <input type="number" id="cantidad" name="cantidad" required />
          </div>
          <button type="submit">Guardar</button>
        </form>
        <Link to= "./Filtros"><button type="submit">Filtrar</button></Link>
      </div>
    </div>
  )
}

export default Formulario