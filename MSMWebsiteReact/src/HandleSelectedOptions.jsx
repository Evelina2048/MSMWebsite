//import { getSelectedLabels } from "./MultiSelectDropdown";

function HandleSelectedOptions({ selectedOptions }) {
    console.log("hi before return")
    console.log("hi, these are your selected labels", selectedOptions.map(option => option.label)) //.map creates a new array by applying a function to each element in the original array.
    return(
        console.log("hi from handleselectedopts")
    );
}
export default HandleSelectedOptions