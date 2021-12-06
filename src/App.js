import { useState, useEffect } from "react";
import "./App.css";
import tours from "./data";
import Card from "./Card";

function App() {
  // Data
  const [show, setShow] = useState(null);
  const [data, setData] = useState(tours);

  // useEffect
  useEffect(() => {
    // add click event
    window.addEventListener("click", (e) => {
      if (e.target.className === "refBtn") {
        setShow(true);
        setTimeout(() => {
          setData(tours);
          setShow(false);
        }, 2000);
      }
      // cleanup
      return () => {
        window.removeEventListener("click");
      };
    });
    // setData(tours);
  }, []);

  // Delete funciton
  const handleDelete = (id) => {
    const newItems = data.filter((i) => {
      return i.id !== id;
    });
    setData(newItems);
    console.log(newItems);
  };

  //re-populate list
  const fillData = () => {
    // i don't know what I'm doing currently
    console.log("2 brain cells working right now!");
  };

  return (
    <>
      {data.length && <h1 className='heading'>Our Tours</h1>}
      {data.length ? (
        data.map((place) => (
          <Card
            key={place.id}
            item={place}
            show={show}
            handleClick={handleDelete}
          />
        ))
      ) : (
        <>
          <h1>{!show ? "No Tours Found" : "Loading..."}</h1>
          <button className='refBtn' onClick={() => fillData()}>
            Refresh
          </button>
        </>
      )}
    </>
  );
}

export default App;

// solve this problems using eventlistener & useEffect
