import { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import Textarea from "./Textarea";
import Label from "./Label";
import RadioBtns from "./RadioBtns";

const AddCar = ({ options }) => {
    const {
        marque,
        anneeModele,
        kilometrage,
        puissanceFiscale,
        fake: { faker },
    } = options;
    console.log(faker);
    const [globalState, setGlobalState] = useState({ radio: "" });
    const [formData, setFormData] = useState({
        marque: "",
        annee: "",
        kilometrage: 0,
        puissanceFiscale: "",
        prix: 0,
        titre: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleChangeRadio = (radioChoice) => {
        setGlobalState({ radio: radioChoice });
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
                    <Label text="Texte de l'annonce" />
                    <Input
                        name="titre"
                        value={formData.titre}
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <Label text="Texte de l'annonce"></Label>
        <Textarea
          name="texte"
          value={formData.texte}
          onChange={handleChange}/>
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
                />
                <RadioBtns
                    title="Boite de vitesses"
                    labels={["Automatique", "Manuelle"]}
                    name="type_vitesses"
                    onChoiceradio={handleChangeRadio}
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
                    </form>
        </>
    );
};

export default AddCar;
