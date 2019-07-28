import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/TourList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <TourList />
      </div>
    );
  }
}

export default App;
