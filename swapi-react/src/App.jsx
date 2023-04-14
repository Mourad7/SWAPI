import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import Starships from "./components/Starships";
import "./App.css";

function App() {
  return (
    <Router>
      {/* The main container of the application */}
      <div className="App">
        {/* The navigation bar of the application */}
        <Navbar />

        {/* The container for the content */}
        <div className="container">
          {/* Define the routes for the application */}
          <Routes>
            {/* Route for displaying the People component */}
            <Route exact path="" element={<People/>}/>

            {/* Route for displaying the Planets component */}
            <Route exact path="/components/Planets" element={<Planets/>}/>

            {/* Route for displaying the Starships component */}
            <Route exact path="/components/Starships" element={<Starships/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
