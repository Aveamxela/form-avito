import { useState } from "react";

const RadioBtns = (onChange) => {
    const radioForm = [
        {
            name: "Type de carburant",
            options: ["Diesel", "Essence", "Electrique", "LPG", "Hybride"],
        },
        { name: "Boite de vitesses", options: ["Automatique", "Manuelle"] },
        {
            name: "Etat",
            options: [
                "Excellent",
                "Très bon",
                "Bon",
                "Correct",
                "Endommagé",
                "Pour Pièces",
                "Neuf",
            ],
        },
        {
            name: "Origine",
            options: [
                "Dédouanée",
                "Pas encore dédouanée",
                "WW au Maroc",
                "Importée neuve",
            ],
        },
        { name: "Nombre de portes", options: ["3", "5"] },
        { name: "Première main", options: ["Oui", "Non"] },
    ];

    const [selectedOption, setSelectedOption] = useState({
        "Type de carburant": "",
        "Boite de vitesses": "",
        "Etat": "",
        "Origine": "",
        "Nombre de portes": "",
        "Première main": "",
    });
    console.log({selectedOption})
    
    const handleChangeRadio = (event) => {
        const { name, value} = event.target;
        console.log(name)
        setSelectedOption((prevState) => {
            return {
                ...prevState,
                [name] : value
            }
            
        })
    };

    const listRadioBtns = radioForm.map((item, index) => (
        <div key={index}>
            <p>{item.name}</p>
            {/* Mapper sur les options et créer input avec :  */}
            {item.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                    <input
                        type="radio"
                        name={item.name}
                        value={option}
                        //Vérifie que la valeur contenue dans notre catégorie est égale à l'option
                        checked={selectedOption[item.name]===option}
                        onChange={handleChangeRadio}
                    />
                    <label>{option}</label>
                </div>
            ))}
        </div>
    ));
    return <div>{listRadioBtns}</div>;
};
export default RadioBtns;
