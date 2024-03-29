import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Cardbox from "./components/cards/Cardbox";
import Footer from "./components/Footer/Footer";

import "./App.css";
const App = () => {
  const [det, setDet] = useState([]);
  const [category, setCategory] = useState("");
  return (
    <div className="d-flex flex-column gap-5" id="App">
      <Header
        category={category}
        setCategory={setCategory}
        det={det}
        setDet={setDet}
      />
      <Cardbox category={category} setDet={setDet} />
      <Footer />
    </div>
  );
};

export default App;
