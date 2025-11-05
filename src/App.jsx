import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Components/Home";
import About from "./Components/About";
import Foods from "./Components/Foods";
import Extras from "./Components/Extras";
import Drinks from "./Components/Drinks";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Foods />
                  <Extras />
                  <Drinks />
                  <Contact />
                  <Footer />
                </>
              }
            />

            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
