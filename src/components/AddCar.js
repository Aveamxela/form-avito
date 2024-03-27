import { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import Textarea from "./Textarea";
import Label from "./Label";


const AddCar = ({ options }) => {
  const { marque, anneeModele, kilometrage, puissanceFiscale, fake: { faker } } = options;
  console.log(faker);

  const [formData, setFormData] = useState({
    marque: "",
    annee: "",
    kilometrage: 0,
    puissanceFiscale: "",
    prix: 0,
    titre: "",
    texte: "",
  })

  const handleChange = e => {
    const { name } = e.target

    setFormData(prevState => ({
      ...prevState,
      [name]: e.target.value,
    }))
  }

  return (
    <>
      <form>
        <div>
          <Label text="Marque" />
          <Select
            name="marque"
            options={marque}
            value={formData.marque}
            onChange={handleChange}/>
          <Label text="Année-Modèle" />
          <Select
            name="annee"
            options={anneeModele}
            value={formData.annee}
            onChange={handleChange} />
          <Label text="Kilométrage" />
          <Select
            name="kilometrage"
            options={kilometrage}
            value={formData.kilometrage}
            onChange={handleChange} />
          <Label text="Puissance fiscale" />
          <Select
            name="puissanceFiscale"
            options={puissanceFiscale}
            value={formData.puissanceFiscale}
            onChange={handleChange} />
        </div>

        <div>
          <Label text="Prix" />
          <Input
            name="prix"
            value={formData.prix}
            type="number"
            onChange={handleChange} />
          <Label text="Texte de l'annonce"/>
          <Input
            name="titre"
            value={formData.titre}
            type="text"
            onChange={handleChange} />
        </div>
        <Label text="Texte de l'annonce"></Label>
        <Textarea
          name="texte"
          value={formData.texte}
          onChange={handleChange}/>
      </form>
    </>
  )
}

export default AddCar;
