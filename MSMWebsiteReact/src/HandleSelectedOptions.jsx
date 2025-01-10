//import { getSelectedLabels } from "./MultiSelectDropdown";
import normEntbrat from './assets/NormEntbrat.webp';
import normShrubb from './assets/NormShrubb.webp';


function HandleSelectedOptions({ selectedOptions }) {
    console.log("hi, these are your selected labels", selectedOptions.map(option => option.label)) //.map creates a new array by applying a function to each element in the original array.

    const images = {
        normEntbrat: { //object
            src: normEntbrat,
            alt: "Normal Entbrat",
            attributes: ["Plant Island", "snow","rock"],
            PlantIsland: ["Shrubb Maw", "Oaktopus Drumpler", "Furcorn Fwog", //all monster combonations that can make an entbrat on plant island
            "Clamble ToeJammer", "Pummel Mammott"]
        },

        normShrubb: {
            src: normShrubb,
            alt: "Normal Shrubb",
            attributes: ["Plant Island", "Plant (Element)","rock"],
            PlantIsland: ["Potbelly Noggin"]
        },
        // {
        //     src: "normEntbrat",
        //     alt: "Normal Entbrat",
        //     attributes: ["plant island","snow","rock"],
        // },
    };
    const imagesToDisplay = PopulateImagesToDisplay(selectedOptions, images);


    return(
        //
        imagesToDisplay.map((image, index) => (
            <div className="allImageEquation">
                <div key={index} className="normEntbrat">
                    <img src={image.src} alt={image.alt} />
                    <p className="+">+</p>
                </div>

                <div >
                <p className="sumLine">____________</p>
                </div>
            </div>
        ))
    )
    }
    export default HandleSelectedOptions
    function PopulateImagesToDisplay(selectedOptions, images){
        console.log("Attributes for normEntbrat:", images["normEntbrat"].attributes);
        console.log("plant combs for normEntbrat:", images["normEntbrat"].PlantIsland);

        const imagesToDisplay = []
        let hasHadAnImagePassOneFilter = false
        let selectedOptionsIndex = -1;
        selectedOptions.some((option,index) => { //use map to loop over selectedOptions. For each option, checks if the label is "Plant Island".
                console.log("before, image length ",imagesToDisplay.length, " images length ", images.length, " images to display size ", imagesToDisplay.length)
                Object.values(images).forEach(image => {
                    if (image.attributes.includes(option.label)) { //if exploring possibilities with first option
                        imagesToDisplay.push(image)
                        console.log("yayyyy ",Object.values(imagesToDisplay).length,"options index ", index)
                        hasHadAnImagePassOneFilter=true
                    }
                    if(hasHadAnImagePassOneFilter == true) {
                        selectedOptionsIndex = index;
                        return;
                    }
                },
                )
            })
        if(selectedOptionsIndex != -1) {
            for(let i = selectedOptionsIndex; i < selectedOptions.length; i++) {
                let option = selectedOptions[i];
                imagesToDisplay.forEach((image) => { //for each image in imagesToDisplay, remove if it doesn't match option
                    if (!image.attributes.includes(option.label)) {
                        imagesToDisplay.remove(image);
                    }
                })
            }
        }
        //
        //use index outside of loop to pick up from there, and refine through the rest of the options
        //
        return imagesToDisplay;
        }