import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  var users = readLocalStorage();
  // var users = ['vaja', 'eka', 'rati', 'tamuna', 'nino', 'keso', 'beqa']
  // localStorage.setItem('users', JSON.stringify(users))
  var [choosen, setchosen] = useState("");


  function choose() {
    const randomNumber = Math.floor(Math.random() * (users.length));
    console.log(randomNumber);
    console.log(users.length);
    console.log( users[randomNumber]);
    var index = users.indexOf(users[randomNumber]);
    console.log(index);
    if (index !== -1) {
      setchosen(users[randomNumber]);
      users.splice(index, 1);
    }
    console.log(users);
    localStorage.setItem('users', JSON.stringify(users))
  }


  return (
    <div className="App">
      <button
        className="resultbtn"
        onClick={() => {
          choose();
        }}
      >
        asd
      </button>
      <div>{choosen}</div>
    </div>
  );
}

export default App;

function readLocalStorage() {
  var users = localStorage.getItem("users");
  if (users === null) {
    return [];
  }
  return JSON.parse(users);
}
