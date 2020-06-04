import React from "react";
import BabyNames from "./BabyNames";
import "./App.css";
import babyNamesData from "./babyNamesData.json";
import Navbar from "./Navbar";
import SearchInput from "./SearchInput ";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <SearchInput />
      <form>
        <ttable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Boys & Girls</th>
              <th>Add to Favorite</th>
            </tr>
          </thead>
          <tbody>
            {babyNamesData.map((item) => {
              return <BabyNames item={item} />;
            })}
          </tbody>
        </ttable>
      </form>
    </div>
  );
}

export default App;
