//import { getSelectedLabels } from "./MultiSelectDropdown";
import normEntbrat from './assets/NormEntbrat.webp';


function HandleSelectedOptions({ selectedOptions }) {
    console.log("hi before return")
    console.log("hi, these are your selected labels", selectedOptions.map(option => option.label)) //.map creates a new array by applying a function to each element in the original array.
    return(
        // console.log("hi from handleselectedopts")
        <div className="normEntbrat">
            <img src = {normEntbrat} alt="Normal Entbrat" />
        </div>
        // for (opts in selectedOptions) {
        //     console.log(opts)
        //     if (opts.equals("Plant")) {
        //         System.out.println("im a plant")
        //     }
        // }
    );
}
export default HandleSelectedOptions