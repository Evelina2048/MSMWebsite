//import React from 'react'
import React, { useState } from "react";
import Select from "react-select";

import HandleSelectedOptions from './HandleSelectedOptions.jsx'

const options = [
    { value: "plant", label: "Plant Island" },
    { value: "cold", label: "Cold" },
    { value: "air", label: "Air" },
    { value: "plant(Element)", label: "Plant (Element)" }
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
