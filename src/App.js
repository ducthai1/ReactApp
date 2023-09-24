import React from "react";
// import "./App.css";
import AlbumFeature from "./features/Album";

function App() {
  // const name = "Duc";
  // const age = 20;
  // const isMale = true;
  // const student = {
  //   name: "Easy Frontend",
  // };
  // const colorList = ["red", "green", "yellow"];
  return (
    <div className="App">
      <header className="App-header">
      <AlbumFeature/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>Tang Duc</p>
        <p>
          Xin chao {name} - {age} {isMale ? "Male" : "Female"}
        </p>
        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}
        {isMale && (
          <div>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </div>
        )}
        {isMale && (
          <>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </>
        )}
        <p>{student.name}</p>

        <ul>
          {colorList.map((color) => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul> */}
      </header>
    </div>
  );
}

export default App;
