import { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import Textarea from "./Textarea";
import Label from "./Label";


const AddCar = () => {
  const [formData, setFormData] = useState({
    marque: "",
    annee: "",
    kilometrage: 0,
    puissanceFiscale: "",
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
          <Input />
          <Textarea />
          <Label text="Marque" />
          <Select
            name="marque"
            options={['','MG', 'Alpha Romeo', 'Chevrolet', 'Chrysler']}
            value={formData.marque}
            onChange={handleChange}/>
          <Label text="Année-Modèle" />
          <Select
            name="annee"
            options={['', 2024, 2023, 2022, 2021]}
            value={formData.annee}
            onChange={handleChange} />
          <Label text="Kilométrage" />
          <Select
            name="kilometrage"
            options={['', '0 - 4 999', '5 000 - 9 999', '10 000 - 14 999', '15 000 - 19 999']}
            value={formData.kilometrage}
            onChange={handleChange} />
          <Label text="Puissance fiscale" />
          <Select
            name="puissanceFiscale"
            options={['', '4C', '5CV', '6CV', '7CV']}
            value={formData.puissanceFiscale}
            onChange={handleChange} />
        </div>
      </form>
    </>
  )
}

export default AddCar;
