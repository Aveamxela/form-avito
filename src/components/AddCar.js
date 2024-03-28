import { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import Textarea from "./Textarea";
import Label from "./Label";
import RadioBtns from "./RadioBtns";
import Checkbox from "./Checkbox";

const AddCar = ({ options, details }) => {

    const {
        marque,
        anneeModele,
        kilometrage,
        puissanceFiscale,
    } = options;

    const [globalState, setGlobalState] = useState({});

    const [formData, setFormData] = useState({
        marque: "",
        annee: "",
        kilometrage: 0,
        puissanceFiscale: "",
        prix: 0,
        titre: "",
        details: {
          "Toit ouvrant": false,
          "Climatisation": false,
          "Radar de recul": false,
          "Ordinateur de bord": false,
        },
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevState) => {
          if (type === 'checkbox') {
              return {
                  ...prevState,
                  details: { ...prevState.details, [name]: checked }
              };
          } else {
              return {
                  ...prevState,
                  [name]: value
              };
          }
      });

    };

    const handleChangeRadio = (name,value) => {
        console.log(name);
        setGlobalState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <>
            <form>
                <div>
                    <Label text="Marque" />
                    <Select
                        name="marque"
                        options={marque}
                        value={formData.marque}
                        onChange={handleChange}
                    />
                    <Label text="Année-Modèle" />
                    <Select
                        name="annee"
                        options={anneeModele}
                        value={formData.annee}
                        onChange={handleChange}
                    />
                    <Label text="Kilométrage" />
                    <Select
                        name="kilometrage"
                        options={kilometrage}
                        value={formData.kilometrage}
                        onChange={handleChange}
                    />
                    <Label text="Puissance fiscale" />
                    <Select
                        name="puissanceFiscale"
                        options={puissanceFiscale}
                        value={formData.puissanceFiscale}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label text="Prix" />
                    <Input
                        name="prix"
                        value={formData.prix}
                        type="number"
                        onChange={handleChange}
                    />
                    <Label text="Titre de l'annonce" />
                    <Input
                        name="titre"
                        value={formData.titre}
                        type="text"
                        onChange={handleChange}
                        required={true}
                    />
                </div>
                <Label text="Texte de l'annonce"></Label>
                <Textarea
                  name="texte"
                  value={formData.texte}
                  onChange={handleChange}
                  required={true}/>
                <RadioBtns
                    title="Type de carburant"
                    labels={[
                        "Diesel",
                        "Essence",
                        "Electrique",
                        "LPG",
                        "Hybride",
                    ]}
                    name="type_carburant"
                    onChoiceradio={handleChangeRadio}
                    required={true}
                />

                <RadioBtns
                    title="Boite de vitesses"
                    labels={["Automatique", "Manuelle"]}
                    name="type_vitesses"
                    onChoiceradio={(radioChoice) =>
                        handleChangeRadio("type_vitesses", radioChoice)
                    }
                    required={true}
                />
                <RadioBtns
                    title="Etat"
                    labels={[
                        "Excellent",
                        "Très bon",
                        "Bon",
                        "Correct",
                        "Endommagé",
                        "Pour pièces",
                        "Neuf",
                    ]}
                    name="etat"
                    onChoiceradio={handleChangeRadio}
                />
                <RadioBtns
                    title="Origine"
                    labels={[
                        "Dédouanée",
                        "Pas encore dédouanée",
                        "WW au Maroc",
                        "Importée neuve",
                    ]}
                    name="origine"
                    onChoiceradio={handleChangeRadio}
                />
                <RadioBtns
                    title="Nombre de portes"
                    labels={[3, 5]}
                    name="porte"
                    onChoiceradio={handleChangeRadio}
                />
                <RadioBtns
                    title="Première main"
                    labels={[
                        "Oui",
                        "Non",
                    ]}
                    name="premiere_main"
                    onChoiceradio={handleChangeRadio}
                />
                <Checkbox
                  details={details}
                  type="checkbox"
                  checked={false}
                  onChange={handleChange} />
                    </form>
        </>
    );
};

export default AddCar;
