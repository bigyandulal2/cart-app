import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
function Canva({ det, setDet }) {
  const [show, setShow] = useState(false);
  const [totalprice, setTotalPrice] = useState(0);
  const [data, setData] = useState(det);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let totalPrice = 0;
    det.forEach((item) => {
      totalPrice += parseInt(item.price);
    });
    setData(det);
    setTotalPrice(totalPrice);
  }, [det]);
  function handleRemove(id) {
    console.log(det);
    let newData = data.filter((x) => x.id !== id);
    console.log(newData);
    // Calculate total price
    let totalPrice = 0;
    if (newData.length !== 0) {
      newData.forEach((item) => {
        totalPrice += parseInt(item.price);
      });
    }
    setDet(newData);
    setTotalPrice(totalPrice);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        your cart
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ textAlign: "center" }}>
            CartItems
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {det.length !== 0 ? (
            det.map((x) => {
              return (
                <ul key={Math.random()} className="list-unstyled">
                  <li>
                    <font size="5">title: </font>
                    {x.title}
                    &nbsp; &nbsp;
                    <Button
                      className="btn btn-danger"
                      onClick={() => handleRemove(x.id)}
                    >
                      Remove
                    </Button>
                  </li>
                  <li>
                    <font size="5">price: </font> {x.price}
                  </li>
                </ul>
              );
            })
          ) : (
            <h4>cart is empty</h4>
          )}

          {totalprice !== 0 && (
            <h3>
              {" "}
              <hr />
              Total:${totalprice}
            </h3>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Canva;
