import React from 'react';
import './App.css';
import Dessert from './Components/Dessert';

function App() {
  return (
    <div className="container">
    <div className="card my-5">
      <div className="card-header bg-dark text-white">Desserts App</div>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">Menu:</li>
          <Dessert name="Ice Cream Sunday" price ="4.50" ></Dessert>
          <Dessert name="Tiramisu" price ="6.25" ></Dessert>
          <Dessert name="Cheesecake" price ="7.00" ></Dessert>
          <Dessert name="Haagen-Dazs Caramel Cone" price ="9.00"></Dessert>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default App;
