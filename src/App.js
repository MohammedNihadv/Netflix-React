import React from "react"
import NavBar from "./components/Navbar/NavBar";
import {Originals,Action,Comedy,Romance,Horror}  from './urls'
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={Originals} title='Netflix Originals' />
      <RowPost url={Action} title='Action' isSmall />
      <RowPost url={Comedy} title='Comedy' isSmall />
      <RowPost url={Romance} title='Romance' isSmall />
      <RowPost url={Horror} title='Horrer' isSmall />
    </div>
  );
}

export default App;
