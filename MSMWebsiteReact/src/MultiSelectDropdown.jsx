//import React from 'react'
import React, { useState } from "react";
import Select from "react-select";

import HandleSelectedOptions from './HandleSelectedOptions.jsx'

const options = [
    { value: "plant", label: "Plant" },
    { value: "cold", label: "Cold" },
    { value: "air", label: "Air" },
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
        <div className="multiSelectDropdown">
        <Select
                options= {options} //{/* options to be in dropdown */}
                value= {selectedOptions} //{/* selected options in dropdown is value of selectedOptions */}
                onChange= {handleChange}
                isMulti = {true} //{/*to determine if multiselect*/}
        />
        <button type="submitButton" onClick={submit}>Submit</button>
        {showHandleOptions && <HandleSelectedOptions selectedOptions={selectedOptions} />}

        </div>
    );
}

export default MultiSelectDropdown
