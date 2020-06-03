import React from 'react';
import BabyNames from './BabyNames';
import './App.css';
import babyNamesData from './babyNamesData.json';


function App() {
  return (
    <div className="App">
      <h1>Hello from App </h1>
      {babyNamesData.map(item => {
        return<BabyNames item={item}/>
      })}

    </div>
  );
}

export default App;
