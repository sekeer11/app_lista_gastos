import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import WebFont from "webfontloader";
import Contenedor from "./elements/Contenedor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioSesion from './components/InicioSesion';
import EditarGasto from './components/EditarGasto';
import GastosPorCategoria from './components/GastosPorCategoria';
import ListaGastos from './components/ListaGastos';
import RegistroUsuarios from './components/RegistroUsuarios';

WebFont.load({
  google: {
    families: ["Work Sans:400,500,700", "sans-serif"],
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Contenedor>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/iniciar-sesion" element={<InicioSesion />} />
          <Route path="/crear-cuenta" element={<RegistroUsuarios />} />
          <Route path="/categorias" element={<GastosPorCategoria />} />
          <Route path="/lista" element={<ListaGastos />} />
          <Route path="/editar/:id" element={<EditarGasto />} />
          <Route path="*" element={<App />} />
        </Routes>
      </Contenedor>
    </BrowserRouter>
  </React.StrictMode>
);
