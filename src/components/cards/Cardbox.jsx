import React, { useState, useEffect } from "react";
import Carddetail from "./Carddetail";
function Cardbox({ category, setDet }) {
  const [pdetails, setPdetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products?title`);
        if (!response.ok) {
          throw new error("something went wrong!⚠️");
        }
        const data = await response.json();
        console.log(data);
        setPdetails(data);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      {error && <Messageerr />}
      {loading && <Loading />}
      {!error && !loading && (
        <Carddetail pdetails={pdetails} category={category} setDet={setDet} />
      )}
    </div>
  );
}
function Loading() {
  return (
    <>
      <span>loading...</span>
    </>
  );
}
function Messageerr() {
  return (
    <>
      {alert("please check your internet connection!!")}
      <h1 style={{ textAlign: "center" }}>something went wrong ! ⚠️</h1>
    </>
  );
}
export default Cardbox;
