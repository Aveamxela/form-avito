import AddCar from "./components/AddCar";

export default function App() {
  const options = {
    marque: ['','MG', 'Alpha Romeo', 'Chevrolet', 'Chrysler'],
    anneeModele: ['', 2024, 2023, 2022, 2021],
    kilometrage: ['', '0 - 4 999', '5 000 - 9 999', '10 000 - 14 999', '15 000 - 19 999'],
    puissanceFiscale: ['', '4C', '5CV', '6CV', '7CV'],
  }

  const details = ['Toit ouvrant', 'Climatisation', 'Radar de recul', 'Ordinateur de bord'];
    return (
        <>
            <AddCar options={options} details={details}/>
        </>
    );
}
