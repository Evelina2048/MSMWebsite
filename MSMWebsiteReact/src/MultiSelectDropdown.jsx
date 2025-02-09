//import React from 'react'
import React, { useState } from "react";
import Select from "react-select";

import HandleSelectedOptions from './HandleSelectedOptions.jsx'

const options = [
    { value: "plant island", label: "Plant Island" },
    { value: "cold island", label: "Cold Island" },
    { value: "air", label: "Air" },
    { value: "plant(Element)", label: "Plant (Element)" },
    { value: "rare", label: "Rare" },
    { value: "rareOaktopus", label: "Rare Oaktopus" },
    { value: "rareFwog", label: "Rare Fwog" },
    { value: "rareMaw", label: "Rare Maw" },
    { value: "rareToeJammer", label: "Rare Toe Jammer" },
    //{value: "", label: ""},
];

const getSelectedLabels = (selectedOptions) => {
    // Check if selectedOptions is an array to avoid errors
    if (!Array.isArray(selectedOptions)) return [];
    return selectedOptions.map(option => option.label);
};

function MultiSelectDropdown() {
    const [selectedOptions, setSelectedOptions] = useState([]); //setSelectedOptions defined here
    const [showHandleOptions, setShowHandleOptions] = useState(false);

    const handleChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
    };
    const submit = () => {
        //const selectedLabels = selectedOptions.map(option => option.label);
        <HandleSelectedOptions></HandleSelectedOptions>
        setShowHandleOptions(true)
    }

    return (
        <div className= "dropdownButtonImages">
        <div className="multiSelectDropdown">
        <Select
                options= {options} //{/* options to be in dropdown */}
                value= {selectedOptions} //{/* selected options in dropdown is value of selectedOptions */}
                onChange= {handleChange}
                isMulti = {true} //{/*to determine if multiselect*/}
        />
        <button type="submitButton" onClick={submit}>Submit</button>
        </div>
        {showHandleOptions && <HandleSelectedOptions selectedOptions={selectedOptions} />}

        </div>
    );
}

export default MultiSelectDropdown


// "rareFwog": {
//     "src": "images/RareFwog.webp",
//     "alt": "Rare Fwog",
//     "attributes": ["Plant Island", "Earth (Element)", "Water (Element)", "Rare Fwog", "Rare"],
//     "Islands": {
//       "PlantIsland": [["images/NormNoggin.webp", "images/NormToeJammer.webp"]],
//       "AirIsland": [["images/NormTRox.webp", "images/NormCongle.webp"]]
//     }
//   },