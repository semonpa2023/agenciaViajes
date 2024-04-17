import Formulario from "./componentes/Formulario";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Filtros from "./componentes/Filtro";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Formulario/>,
  },
  {
    path: "/Filtros",
    element: <Filtros />,
  },
 

 

]);

function App() {
  return (
    <div className="login-container">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
