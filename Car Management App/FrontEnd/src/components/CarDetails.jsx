import React from "react";
import { useState } from "react";
import "../components/CarDetails.css";

function CarDetails({addCars}) {
  //create the state to handle the form change
  const [carDetails, setCarDetaila] = useState({
    carname: "",
    manufacturer: "",
    speed: "",
    color: "",
    spoilers: "",
  });

  //function to handle the change in form
  const handleChange = (event) => {
    setCarDetaila({ ...carDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCars(carDetails);
    setCarDetaila({
      carname: "",
      manufacturer: "",
      speed: "",
      color: "",
      spoilers: "",
    });
  };
  return (
    <>
      <div className="heading">Add Car Details</div>
      <br />
      <div className="cardetails">
        <form action="" onSubmit={handleSubmit}>
          <div>
            Car Name:
            <input
              type="text"
              name="carname"
              id=""
              value={carDetails.carname}
              onChange={handleChange}
            />
          </div>
          <div>
            Manufacturer:{" "}
            <input
              type="text"
              name="manufacturer"
              id=""
              value={carDetails.manufacturer}
              onChange={handleChange}
            />
          </div>
          <div>
            Top Speed:{" "}
            <input
              type="text"
              name="speed"
              id=""
              value={carDetails.speed}
              onChange={handleChange}
            />
          </div>
          <div>
            Color:{" "}
            <input
              type="text"
              name="color"
              id=""
              value={carDetails.color}
              onChange={handleChange}
            />
          </div>
          <div>
            spoilers:{" "}
            <input
              type="text"
              name="spoilers"
              id=""
              value={carDetails.spoilers}
              onChange={handleChange}
            />
          </div>
          <br />
          <button className="submitBtn">Details Submited</button>
        </form>
      </div>
    </>
  );
}

export default CarDetails;
