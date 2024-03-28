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
    } = options;

    const [globalState, setGlobalState] = useState({});

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
                <div className="allSelect">
                    <div className="selectItem">
                        <Label text="Marque" />
                        <Select
                            name="marque"
                            options={marque}
                            value={formData.marque}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="selectItem">
                        <Label text="Année-Modèle" />
                        <Select
                            name="annee"
                            options={anneeModele}
                            value={formData.annee}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="selectItem">
                        <Label text="Kilométrage" />
                        <Select
                            name="kilometrage"
                            options={kilometrage}
                            value={formData.kilometrage}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="selectItem">
                        <Label text="Puissance fiscale" />
                        <Select
                            name="puissanceFiscale"
                            options={puissanceFiscale}
                            value={formData.puissanceFiscale}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="allRadioBtns">
                    <RadioBtns
                        className="radioBtn"
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
                        className="radioBtn"
                        title="Boite de vitesses"
                        labels={["Automatique", "Manuelle"]}
                        name="type_vitesses"
                        onChoiceradio={handleChangeRadio}
                    />
                    <RadioBtns
                        className="radioBtn"
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
                        className="radioBtn"
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
                        className="radioBtn"
                        title="Nombre de portes"
                        labels={[3, 5]}
                        name="porte"
                        onChoiceradio={handleChangeRadio}
                    />
                    <RadioBtns
                        className="radioBtn"
                        title="Première main"
                        labels={["Oui", "Non"]}
                        name="premiere_main"
                        onChoiceradio={handleChangeRadio}
                    />
                </div>
                <div className="allInfos">
                    <div className="info">
                        <Label text="Prix" />
                        <Input
                            name="prix"
                            value={formData.prix}
                            type="number"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="info">
                        <Label text="Titre de l'annonce" />
                        <Input
                            name="titre"
                            value={formData.titre}
                            type="text"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="info">
                        <Label text="Texte de l'annonce"></Label>
                        <Textarea
                            name="texte"
                            value={formData.texte}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </form>
        </>
    );
};

export default AddCar;
