import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <h1>Hello React!</h1>

      <div className="pizzas">
        {pizzaData.map((pizza) => {
          return (
            <Pizza
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              img={pizza.photoName}
              soldOut={pizza.soldOut}
            />
          );
        })}
      </div>
    </div>
  );
}

const Pizza = (props) => {
  return (
    <div class="pizza">
      <div>
        <img src={props.img} alt="" />
      </div>
      <div>
        <h2>{props.name}</h2>
        <p>
          Ingredients: <span>{props.ingredients}</span>
        </p>
        <p>${props.price}</p>
      </div>
    </div>
  );
};

//React 18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
