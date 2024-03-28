import { Link } from "react-router-dom";

const CarList = ({cars}) => {
  console.log(cars);
  return (
    <div>
      <h3>Liste de voitures :</h3>
      {cars.map((car, index) => {
        return (
        <div key={index}>
          <h4>Titre de l'annonnce : {car.titre}</h4>
          <p>Texte de l'annonce : {car.texte}</p>
          <p>Marque : {car.marque}</p>
          <p>Annee : {car.annee}</p>
          <p>Kilométrage : {car.kilometrage}</p>
          <p>Etat : {car.etat}</p>
          <Link to="/form">Ajouter une voiture</Link>
        </div>
        )
      })}
    </div>
  )
}

export default CarList;
