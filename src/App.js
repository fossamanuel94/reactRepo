import React from 'react';
import './App.css';
import {Table} from "./Components/Table";

function App() {

  
  return (
    <div className="App-header">
      <div className="container">
        <div className="jumbotron" style={{backgroundImage: "url(https://www.ecestaticos.com/image/clipping/805b2e3665752c8e649869bbccf5bf52/por-que-siempre-debes-comprar-la-pizza-mas-grande-y-nos-dos-pequenas.jpg)"}}>
          <h1 style={{color: "white"}}>Receta Pizza Casera</h1>
          <Table/>
        </div>
      </div>
    </div>
  );
}

export default App;
