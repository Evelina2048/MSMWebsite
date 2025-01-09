//import { getSelectedLabels } from "./MultiSelectDropdown";
import normEntbrat from './assets/NormEntbrat.webp';


function HandleSelectedOptions({ selectedOptions }) {
    console.log("hi, these are your selected labels", selectedOptions.map(option => option.label)) //.map creates a new array by applying a function to each element in the original array.

    const images = {
        normEntbrat: { //object
            src: normEntbrat,
            alt: "Norm Entbrat",
            attributes: ["Plant Island","snow","rock"],
            PlantIsland: ["Shrubb Maw", "Oaktopus Drumpler","Furcorn Fwog", //all monster combonations that can make an entbrat on plant island
            "Clamble ToeJammer","Pummel Mammott"]
        },
        // {
        //     src: "normEntbrat",
        //     alt: "Normal Entbrat",
        //     attributes: ["plant island","snow","rock"],
        // },
    };

    console.log("Attributes for normEntbrat:", images["normEntbrat"].attributes);
    console.log("plant combs for normEntbrat:", images["normEntbrat"].PlantIsland);

    const imagesToDisplay = []
    selectedOptions.map(option => { //use map to loop over selectedOptions. For each option, checks if the label is "Plant Island".
            console.log("before, image length ",imagesToDisplay.length, " images length ", images.length, " images to display size ", imagesToDisplay.length)
            //
            Object.values(images).forEach(image => {
                if (image.attributes.includes(option.label) && imagesToDisplay.length==0) {
                    imagesToDisplay.push(image)
                    console.log("yayyyy")
                }
            },

            )

        })
    return(

        //
        imagesToDisplay.map((image, index) => (
            <div key={index} className="normEntbrat">
                <img src={image.src} alt={image.alt} />
                <p>+</p>
                <p>____________</p>
            </div>
        ))
        //
    )
}
export default HandleSelectedOptions