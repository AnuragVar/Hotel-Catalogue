import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//to style React Application first import the css file
// import {index.css}
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

//class is the reserved keyword in the javaScript
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "darkred",
  //   fontSize: "50pX",
  //   textAlign: "center",
  //   textTransform: "uppercase",
  // };
  // const style = {};
  return (
    <header className="header">
      <h1>VIP Pizza.co</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu:</h2>
      {pizzas ? (
        <>
          <p>Welcome to our Menu</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : null}
      {/* //Rather than writing pizza multiple times, we
      would use map here. */}

      {/* <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={18}
        photoName="pizzas/prosciutto.jpg"
        soldOut={false}
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price={15}
        photoName="pizzas/salamino.jpg"
        soldOut={true}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
        soldOut={false}
      /> */}
    </main>
  );
}
//props -props is the way of passing parameters or data from parent to child component

function Pizza({ pizzaObj }) {
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        console.log(pizzaObj.price)
      </div>
    </div>
  );
}

function Footer() {
  //components are nothing but written in javascript , hence we can write any javascript code in it.

  // const hour = new Date().getHours;
  // const openHour = 12;
  // const closeHour = 22;
  // const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);
  const hour = new Date().getHours();
  const openHour = 22;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  //true will be printed twice on console if we are using strictMode in app component;
  // if (isOpen)
  //   return (
  //     <footer className="footer">
  //       <p>we're closed</p>
  //     </footer>
  //   );

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHour} />
      ) : (
        <p>
          we're happy to see you between {openHour}.00 and {closeHour}.00
        </p>
      )}
    </footer>
  );
}
function Order({ closeHours }) {
  return (
    <div className="order">
      <p>we're still open till {closeHours}:00 ,come and order now</p>
      <button className="btn">Order</button>
    </div>
  );
}
//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//React Before version 18
// rootDOM.render(<App/>,document.getElementById("root"));
// along with changes in import line of reactdom just remove that client part from it

//

//Lec 11
//Passing and Receiving Props
// while passing props
// <Pizza here......................./>
// we will write the properties like name ="" price = {}
// we will use "" while passing string and while passing No. or 0/1 we will be using {};

// ans while receiving we will use them as a java script hence {}

//to align them we can put all the stuff in div. e.g. h3 and p element in Pizza .

//lec 15
// rendering list
// for each array element, we need to render a component

// do this by map
// arr_name.map((pizza)=><Pizza ....../>)
// ... means all the props that we need to pass
// here in this case we are passing the pizza object itself

// we can't use forEach here because jsx needs a new array
// which is only possible with map

// Lec 16
// Conditonal RENDERING WITH &&

// shortcurcuiting is used here. if the condition before && is not shortcurcuited then the second part of && will be displayed or executed

// javascript do not render false or true, but it can render a no.

// lec 17
// we can do the same thing using ternary operator
// ?task((here the whole div element)):null((if nothing is to be done));

//lec 18
// we can do the same thing by multiple returns
// we can use if else in components outside return part
// but cannot use them in jsx .

//most of time we will use conditional operator or ternary operator for small jsx part
//we use multiple returns when we are deciding rendering of components itself

//lec 19
// whenever we feel that jsx is getting longer and longer, we will use more components there
// e.g. Order

//Lec 20
//Destructuring Props
// we can get props without using props just by writing
// {...,...,...}
// ... are the names of properties that we have passed

// second advantage is that here we need not to go upward to see the name of the prop

//lec 21 React Fragment
// so in react every piece of jsx must have only one root element
// to make multiple roots, we have to use React Fragment
// we need to wrap it up in some element tag like div(will mess up the formating) or React Fragment

// React Fragment lets us group some element without leaving any trace in HTML OR DOM

// to pass key we need to write React Fragment there.

//  <React Fragment key =" "></React Fragment>

//LEC 22 SETTING CLASSES AND TEXT CONDITIONALLY
// we can set class conditionally by using literals and keep it in mind that literals are in javascript hence we need to put it in {} in jsx;
// if you want to add two or more classNames then you need `` .
// className ={`${conditon?"jdkfjl":"dhf"}`}
// in the jsx;
