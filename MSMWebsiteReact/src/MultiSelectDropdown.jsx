import Select from "react-select";


function MultiSelectDropdown() {

    const selectOptions = [
        { value: "plant", label: "Plant"},
        { value: "cold", label: "Cold"},
        { value: "air", label: "Air"}

]
    const [selectedOptions, setSelectedOptions] = useState([]) //use an array
    const handleChange = (selectOption) => {
        setSelectedOptions(selectOption);
    }
    return(
        <div className ="multiSelectDropdown">
        <h5>Multi select dropdown</h5>
        {/*Dropdown*/}
        options={options} /* options to be in dropdown */
        value={selectedOptions} /* selected options in dropdown is vlaue of selectedOptions */
        onChange={handleChange}
        isMulti{true} /*to determine if multiselect*/
        </div>
    );
}

export default MultiSelectDropdown