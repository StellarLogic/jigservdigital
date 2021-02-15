import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Compare from "./components/Compare/Compare";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      <Compare />
    </div>
  );
};

export default App;
