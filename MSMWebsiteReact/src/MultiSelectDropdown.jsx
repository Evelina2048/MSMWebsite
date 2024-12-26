//import React from 'react'
import React, { useState } from "react";
import Select from "react-select";

const options = [
    { value: "plant", label: "Plant" },
    { value: "cold", label: "Cold" },
    { value: "air", label: "Air" },
];

function MultiSelectDropdown() {

    const [selectedOptions, setSelectedOptions] = useState([]); //setSelectedOptions defined here
    const handleChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
    };
    const submit = () => {
        //console.log(selectedOptions);
        const selectedLabels = selectedOptions.map(option => option.label);
        console.log(selectedLabels);
    }

    return (
        <div className="multiSelectDropdown">
        {/* <h5>Multi select dropdown</h5> */}
        {/* Dropdown */}
        <Select
                options= {options} //{/* options to be in dropdown */}
                value= {selectedOptions} //{/* selected options in dropdown is value of selectedOptions */}
                onChange= {handleChange}
                isMulti = {true} //{/*to determine if multiselect*/}
        />
        <button type="button" onClick={submit}>Test</button>
        </div>
    );
}

export default MultiSelectDropdown
