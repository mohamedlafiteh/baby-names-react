import React from "react";
import BabyNames from "./BabyNames";
import "./App.css";
import babyNamesData from "./babyNamesData.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <h1>Hello from App </h1>
      <table>
        <thead>
          <tr>Boys</tr>
          <tr>Girls</tr>
        </thead>
        <tbody>
          <tr>1</tr>
          <tr>2</tr>
        </tbody>
      </table>
      {babyNamesData.map((item) => {
        return <BabyNames item={item} />;
      })}
    </div>
  );
}

export default App;
