import React, { useState } from "react";

import { Card, ListGroup, Button } from "react-bootstrap";
const Cardval = ({ item, det, setDet }) => {
  function handleClick(id, price, title) {
    setDet((prev) => [...prev, { id: id, price: price, title: title }]);
    alert("item added successfully in your cart");
  }

  return (
    <div className="card-grid">
      {item.map((item) => (
        <Card
          style={{ width: "18rem", marginBottom: "20px" }}
          id="cardbox"
          key={item.id}
        >
          <Card.Img
            variant="top"
            src={item.image}
            style={{ width: "100%", height: "200px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title
              style={{
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              {item.title}
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <p className="text-center">price-${item.price}</p>
            {/* <Canva price={item.price} pname={item.title} /> */}
            <Button
              onClick={() => handleClick(item.id, item.price, item.title)}
            >
              Add to cart
            </Button>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
};

export default Cardval;
