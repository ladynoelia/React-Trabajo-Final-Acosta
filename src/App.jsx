import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Container from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <h1>Bienvenidos</h1>
      </div>
      <div>
        <Container />
      </div>
      <footer>
        <p>Hakushi © 2025 Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
