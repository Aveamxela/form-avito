import { useState } from "react";
import Select from "./Select";

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
          <Select name="marque" options={['','MG', 'Alpha Romeo', 'Chevrolet', 'Chrysler']} value={formData.marque} onChange={handleChange}/>
          <Select name="annee" options={['', 2024, 2023, 2022, 2021]} value={formData.annee} onChange={handleChange} />
        </div>
      </form>
    </>
  )
}

export default AddCar;
