import { createBrowserRouter } from "react-router-dom";
import AddCar from "../components/AddCar";
import CarList from "../components/CarList";
import Homepage from "./Homepage";
// import { useState } from "react";

// const [cars, setCars] = useState([]);

const options = {
  marque: ['MG', 'Alpha Romeo', 'Chevrolet', 'Chrysler'],
  anneeModele: [2024, 2023, 2022, 2021],
  kilometrage: ['0 - 4 999', '5 000 - 9 999', '10 000 - 14 999', '15 000 - 19 999'],
  puissanceFiscale: ['4C', '5CV', '6CV', '7CV'],
}

const details = ['Toit ouvrant', 'Climatisation', 'Radar de recul', 'Ordinateur de bord'];

const savedObject =  localStorage.getItem("CarsData");
const cars = JSON.parse(savedObject);
console.log(cars);

// const handleSubmit = (formData) => {
//   setCars([...cars, formData]);
// };

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/form",
    element: <AddCar options={options} details={details} />,
  },
  {
    path: "/cars",
    element: <CarList cars={cars}/>,
  }
]);
