import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <h1>Bienvenidos</h1>
      </div>
      <div>
        <ItemListContainer />
      </div>
      <footer>
        <p>Hakushi © 2025 Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
