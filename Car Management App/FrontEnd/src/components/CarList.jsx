import React from "react";

const CarList = ({ cars }) => {
  console.log(cars);
  return (
    <>
      <div>CarList</div>
      {cars.map((car) => {
        return (
          <div key={car.carname}>
            <p>{car.carname}</p>
            <p>{car.manufacturer}</p>
            <p>{car.color}</p>
            <p>{car.speed}</p>
            <p>{car.spoilers}</p>
          </div>
        );
      })}
    </>
  );
}

export default CarList;
