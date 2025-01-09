//import { getSelectedLabels } from "./MultiSelectDropdown";
import normEntbrat from './assets/NormEntbrat.webp';


function HandleSelectedOptions({ selectedOptions }) {
    console.log("hi before return")
    console.log("hi, these are your selected labels", selectedOptions.map(option => option.label)) //.map creates a new array by applying a function to each element in the original array.

    const images = {
        normEntbrat: { //object
            src: normEntbrat,
            alt: "Norm Entbrat",
            attributes: ["Plant Island","snow","rock"]
        },
        // {
        //     src: "normEntbrat",
        //     alt: "Normal Entbrat",
        //     attributes: ["plant island","snow","rock"],
        // },
    };

    console.log("Attributes for normEntbrat:", images["normEntbrat"].attributes);
    // selectedOptions.forEach(option => {
    //     if (option.label === "Plant Island") { // Compare with `option.label`, not just `option`
    //         return(
    //             <div className="normEntbrat">
    //                 <img src = {normEntbrat} alt="Normal Entbrat" />
    //                 <p>+</p>
    //                 <p>____________</p>
    //             </div>
    //         );
    //     } else {
    //         console.log("something else ", option.label);
    //     }
    // });
    const imagesToDisplay = []
    return(
        selectedOptions.map(option => { //use map to loop over selectedOptions. For each option, checks if the label is "Plant Island".
            console.log("before, image length ",imagesToDisplay.length, " images length ", images.length)
            //
            Object.values(images).forEach(image => {
                if (image.attributes.includes(option.label)) {
                    imagesToDisplay.push(image)
                    console.log("yayyyy")
                }
            })
            //
            if (option.label === "Plant Island") {
                //then do another loop through image attributes to check for anything that contains "plant island" as an attribute
                // for (let imageIndex = 0; imageIndex < Object.keys(images).length; imageIndex++) {
                //     for(let attributeIndex = 0; attributeIndex< Object.keys(im).attributes.length; attributeIndex++) {
                //         console.log("attribute: ", images[imageIndex].attributes[attributeIndex]);
                //         imagesToDisplay.push(images[imageIndex])
                //     }
                // }
                console.log("after,image length ",imagesToDisplay.length)
                //if yes, add to list
                return(
                    <div className="normEntbrat">
                        <img src = {images.normEntbrat.src} alt={images.normEntbrat.alt} />
                        <p>+</p>
                        <p>____________</p>
                    </div>
                );
            } else {
                console.log("something else ", option.label);
            }
        })
    //     console.log("hi from handleselectedopts")
    //     // <div className="normEntbrat">
    //     //     <img src = {normEntbrat} alt="Normal Entbrat" />
    //     //     <p>+</p>
    //     //     <p>____________</p>
    //     // </div>
    //     // for (opts in selectedOptions) {
    //     //     console.log(opts)
    //     //     if (opts.equals("Plant")) {
    //     //         System.out.println("im a plant")
    //     //     }
    //     // }
    );
}
export default HandleSelectedOptions