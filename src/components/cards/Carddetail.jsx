import React from "react";
import { Container } from "react-bootstrap";
import Cardval from "./Cardval";
const Carddetail = ({ pdetails, category, setDet }) => {
  return (
    <Container>
      {category === "" && <Cardval item={pdetails} setDet={setDet} />}
      {category === "category" && <Cardval item={pdetails} setDet={setDet} />}

      {category !== "" && (
        <Cardval
          setDet={setDet}
          item={pdetails.filter((item) => item.category === category)}
        />
      )}
    </Container>
  );
};

export default Carddetail;
