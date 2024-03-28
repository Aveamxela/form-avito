const CarList = ({cars}) => {
  return (
    <div>
      <h3>Liste de voitures :</h3>
      {cars.map(car => {
        return (
        <>
          <h4>Titre de l'annonnce : {car.titre}</h4>
          <p>Texte de l'annonce : {car.texte}</p>
          <p>Marque : {car.marque}</p>
          <p>Annee : {car.annee}</p>
          <p>Kilométrage : {car.kilometrage}</p>
          <p>Etat : {car.etat}</p>
        </>
        )
      })}
    </div>
  )
}

export default CarList;
