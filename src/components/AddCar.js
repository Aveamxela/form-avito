import { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import Textarea from "./Textarea";
import Label from "./Label";
import RadioBtns from "./RadioBtns";
import Checkbox from "./Checkbox";
import { MdCalendarToday } from "react-icons/md";
import { MdBrandingWatermark } from "react-icons/md";
import { TbGaugeFilled } from "react-icons/tb";
import { TbEngine } from "react-icons/tb";
import { IoIosPricetags } from "react-icons/io";
import { TbCircleLetterT } from "react-icons/tb";
import { CiLineHeight } from "react-icons/ci";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { WiStars } from "react-icons/wi";
import { MdFlag } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { GiCarKey } from "react-icons/gi";




const AddCar = ({ options, details, onSubmit }) => {
    const { marque, anneeModele, kilometrage, puissanceFiscale } = options;

    const [formData, setFormData] = useState({
        marque: "",
        annee: "",
        kilometrage: 0,
        puissanceFiscale: "",
        prix: 0,
        titre: "",
        type_carburant: "",
        type_vitesses: "",
        etat: "",
        origine: "",
        porte: "",
        premiere_main: "",
        details: {
            "Toit ouvrant": false,
            Climatisation: false,
            "Radar de recul": false,
            "Ordinateur de bord": false,
        },
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevState) => {
            if (type === "checkbox") {
                return {
                    ...prevState,
                    details: { ...prevState.details, [name]: checked },
                };
            } else {
                return {
                    ...prevState,
                    [name]: value,
                };
            }
        });
    };

    const handleChangeRadio = (name, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Votre voiture a bien été enregistrée !`);
        onSubmit(formData);
    };

    return (
        <>
            <h1>Détails de l'annonce</h1>
            <h2>
                Ajouter plus de détails sur votre annonce pour un maximum de
                visbilité
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="allSelect">
                    <div className="selectItem">
                        <Label text="Marque" />
                        <div className="iconAnd">
                            <MdBrandingWatermark />
                            <Select
                                name="marque"
                                options={marque}
                                value={formData.marque}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="selectItem">
                        <Label text="Année-Modèle" />
                        <div className="iconAnd">
                            <MdCalendarToday />
                            <Select
                                name="annee"
                                options={anneeModele}
                                value={formData.annee}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="selectItem">
                        <Label text="Kilométrage" />
                        <div className="iconAnd">
                            <TbGaugeFilled />
                            <Select
                                name="kilometrage"
                                options={kilometrage}
                                value={formData.kilometrage}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="selectItem">
                        <Label text="Puissance fiscale" />
                        <div className="iconAnd">
                            <TbEngine />
                            <Select
                                name="puissanceFiscale"
                                options={puissanceFiscale}
                                value={formData.puissanceFiscale}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="allRadioBtns">
                    <RadioBtns
                        className="radioBtn"
                        title="Type de carburant"
                        icon={<BsFillFuelPumpFill />}
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
                        className="radioBtn"
                        title="Boite de vitesses"
                        icon={<TbManualGearbox />}
                        labels={["Automatique", "Manuelle"]}
                        name="type_vitesses"
                        onChoiceradio={handleChangeRadio}
                        required={true}
                    />
                    <RadioBtns
                        className="radioBtn"
                        title="Etat"
                        icon={<WiStars />}
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
                        icon={<MdFlag />}
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
                        icon={<GiCarDoor />}
                        labels={[3, 5]}
                        name="porte"
                        onChoiceradio={handleChangeRadio}
                    />
                    <RadioBtns
                        className="radioBtn"
                        title="Première main"
                        icon={<GiCarKey />}
                        labels={["Oui", "Non"]}
                        name="premiere_main"
                        onChoiceradio={handleChangeRadio}
                    />
                </div>
                <h1>Information de l'annonce</h1>
                <h2>
                    Une annonce avec un prix exacte et une description bien
                    détaillé a 10 fois plus de visibilité
                </h2>
                <div className="allInfos">
                    <div className="info">
                        <div className="iconAnd">
                            <IoIosPricetags />
                            <Label text="Prix" />
                        </div>
                        <Input
                            name="prix"
                            value={formData.prix}
                            type="number"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="info">
                        <div className="iconAnd">
                            <TbCircleLetterT />
                            <Label text="Titre de l'annonce" />
                        </div>

                        <Input
                            name="titre"
                            value={formData.titre}
                            type="text"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="info">
                        <div className="iconAnd">
                            <CiLineHeight />
                            <Label text="Texte de l'annonce" />
                        </div>
                        <Textarea
                            name="texte"
                            value={formData.texte}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <h1>Plus de détails</h1>
                <h2>Ajouter des détails supplémentaires</h2>
                <Checkbox
                    details={details}
                    type="checkbox"
                    checked={false}
                    onChange={handleChange}
                />
                <button>Soumettre</button>
            </form>
        </>
    );
};

export default AddCar;
