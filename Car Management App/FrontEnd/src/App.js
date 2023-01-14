import { useState } from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import CarDetails from "./components/CarDetails";
import CarList from "./components/CarList";
function App() {

   //create the state to get the car details and pass to other compnents
   const [cars, updateCars] = useState([]);
   //add the cars 
   const addCars = (carsDetails) =>{
    updateCars([...cars,carsDetails])
   }
   console.log(cars);
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
          <Route path="/carDetails" element={<CarDetails addCars={addCars}/>}/>
          {/* <Route path="/carlist" element={  }/> */}
         </Routes>
       </BrowserRouter>
       <CarList cars={cars}/>
    </div>
  );
}

export default App;
