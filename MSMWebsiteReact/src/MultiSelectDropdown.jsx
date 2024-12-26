//import React from 'react'
import React, { useState } from "react";
import Select from "react-select";

const options = [
    { value: "plant", label: "Plant" },
    { value: "cold", label: "Cold" },
    { value: "air", label: "Air" },
];

function MultiSelectDropdown() {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
    };

    return (
        <div className="multiSelectDropdown">
        <h5>Multi select dropdown</h5>
        {/* Dropdown */}
        <Select
                options= {options} //{/* options to be in dropdown */}
                value= {selectedOptions} //{/* selected options in dropdown is vlaue of selectedOptions */}
                onChange= {handleChange}
                isMulti = {true} //{/*to determine if multiselect*/}
        />
        {/* <button type="button">Test</button> */}
        </div>
    );

    // const handleClick = () => {
    //     //gather data from "sort by dropdown"
    // }

    // return(
    //     <div className ="submit">
    //     <button typ="button" onClick={handleClick}>Test</button>
    //     </div>
    // );


        //     <Select
        //         options= {options} //{/* options to be in dropdown */}
        //         value= {selectedOptions} //{/* selected options in dropdown is vlaue of selectedOptions */}
        //         onChange= {handleChange}
        //         //isMulti = {true} //{/*to determine if multiselect*/}
        //     />
        //     <button>Submitty</button>
        //     </div>
        //<div className ="submit">
}

export default MultiSelectDropdown
