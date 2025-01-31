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



  // {
  //   "normBowgart": {
  //     "src": "images/NormBowgart.webp",
  //     "alt": "Normal Bowgart",
  //     "attributes": [],
  //     "PlantIsland": [],
  //     "ColdIsland": []
  //   },
  //   "normCongle": {
  //     "src": "images/NormCongle.webp",
  //     "alt": "Normal Congle",
  //     "attributes": [],
  //     "AirIsland": []
  //   },
  //   "normEntbrat": {
  //     "src": "images/NormEntbrat.webp",
  //     "alt": "Normal Entbrat",
  //     "attributes": ["Plant Island", "Snow (Element)", "Earth (Element)", "Water (Element)", "Plant (Element)"],
  //     "PlantIsland": [["images/NormShrubb.webp", "images/NormMaw.webp"], ["images/NormOaktopus.webp", "images/NormDrumpler.webp"], ["images/NormFurcorn.webp", "images/NormFwog.webp"]]
  //   },
  //   "normShrubb": {
  //     "src": "images/NormShrubb.webp",
  //     "alt": "Normal Shrubb",
  //     "attributes": ["Plant Island", "Plant (Element)", "Rock"],
  //     "PlantIsland": [["images/NormPotbelly.webp", "images/NormNoggin.webp"]]
  //   },
  //   "normMammott": {
  //     "src": "images/NormMammott.webp",
  //     "alt": "Normal Mammott",
  //     "attributes": [],
  //     "PlantIsland": [],
  //     "ColdIsland": []
  //   },
  //   "normMaw": {
  //     "src": "images/NormMaw.webp",
  //     "alt": "Normal Maw",
  //     "attributes": ["Snow (Element)"],
  //     "PlantIsland": ["idk"]
  //   },
  //   "normOaktopus": {
  //     "src": "images/NormOaktopus.webp",
  //     "alt": "Normal Oaktopus",
  //     "attributes": ["idk"],
  //     "PlantIsland": ["idk"]
  //   },
  //   "rareFwog": {
  //     "src": "images/RareFwog.webp",
  //     "alt": "Rare Fwog",
  //     "attributes": ["Plant Island", "Earth (Element)", "Water (Element)", "Rare Fwog", "Rare"],
  //     "PlantIsland": [["images/NormNoggin.webp", "images/NormToeJammer.webp"]],
  //     "AirIsland": [["images/NormTRox.webp", "images/NormCongle.webp"]]
  //   },
  //   "rareOaktopus": {
  //       "src": "images/RareOaktopus.webp",
  //       "alt": "Rare Oaktopus",
  //       "attributes": ["Plant Island", "Plant (Element)", "Water (Element)", "Rare Oaktopus", "Rare"],
  //       "PlantIsland": [["images/NormPotbelly.webp", "images/NormToeJammer.webp"]],
  //       "ColdIsland": [["images/NormPotbelly.webp", "images/NormToeJammer.webp"]]
  //     },
  //     "rareMaw": {
  //       "src": "images/RareMaw.webp",
  //       "alt": "Rare Maw",
  //       "attributes": ["Plant Island", "Cold Island", "Rare", "Water (Element)", "Snow (Element)"],
  //       "PlantIsland": [["images/NormToeJammer.webp", "images/NormMammott.webp"]],
  //       "ColdIsland": [["images/NormToeJammer.webp", "images/NormMammott.webp"]]
  //     },
  //     "rareToeJammer": {
  //       "src": "images/RareToeJammer.webp",
  //       "alt": "Rare Toe Jammer",
  //       "attributes": ["Plant Island", "Cold Island", "Rare", "Water (Element)"],
  //       "Islands": {
  //       "PlantIsland": [["images/NormBowgart.webp", "images/NormTRox.webp"]], 
  //       "ColdIsland": []
  //       }
  //     },
  //     "PlantIsland": {
  //       "src": "images/PlantIsland.webp",
  //       "alt": "Plant Island Wordmark",
  //       "attributes": ["PlantIsland"]
  //     },

  //     "ColdIsland": {
  //       "src": "images/ColdIsland.webp",
  //       "alt": "Cold Island Wordmark",
  //       "attributes": ["ColdIsland"]
  //     }
  // }