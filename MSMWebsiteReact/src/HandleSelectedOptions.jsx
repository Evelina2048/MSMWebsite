//import { getSelectedLabels } from "./MultiSelectDropdown";
import normDrumpler from './assets/NormDrumpler.webp';
import normEntbrat from './assets/NormEntbrat.webp';
import normFwog from './assets/NormFwog.webp';
import normFurcorn from './assets/NormFurcorn.webp';
import normMaw from './assets/NormMaw.webp';
import normOaktopus from './assets/NormOaktopus.webp';
import normShrubb from './assets/NormShrubb.webp';
import normPotbelly from './assets/NormPotbelly.webp'
import normNoggin from './assets/NormNoggin.webp'


const listOfFilteredIslands = []

function HandleSelectedOptions({ selectedOptions }) {
    console.log("hi, these are your selected labels", selectedOptions.map(option => option.label)) //.map creates a new array by applying a function to each element in the original array.

    const images = {
        normEntbrat: { //object
            src: normEntbrat,
            alt: "Normal Entbrat",
            attributes: ["Plant Island", "Snow (Element)","Earth (Element)","Water (Element)","Plant (Element)"],
            PlantIsland: [[normShrubb,normMaw], [normOaktopus,normDrumpler], [normFurcorn,normFwog]] //all monster combonations that can make an entbrat on plant island
            // "normClamble normToeJammer"], ["normPummel normMammott"]]
        },

        normShrubb: {
            src: normShrubb,
            alt: "Normal Shrubb",
            attributes: ["Plant Island", "Plant (Element)","rock"],
            PlantIsland: [[normPotbelly,normNoggin]]
        },

        normMaw: {
            src: normMaw,
            alt: "Normal Maw",
            attributes: ["Snow (element)"],
            PlantIsland: ["idk"]
        },

        normOaktopus: {
            src: normOaktopus,
            alt: "Normal Maw",
            attributes: ["idk"],
            PlantIsland: ["idk"]
        },

        normNoggin: {
            src: normNoggin,
            alt: "",
            attributes: [""],
            PlantIsland: [""],
        },

        normPotbelly: {
            src: normPotbelly,
            alt: "",
            attributes: [""],
            PlantIsland: [""],
        },
        // {
        //     src: "normEntbrat",
        //     alt: "Normal Entbrat",
        //     attributes: ["plant island","snow","rock"],
        // },
    };
    const imagesToDisplay = PopulateImagesToDisplay(selectedOptions, images);
    console.log("that ",imagesToDisplay[0][listOfFilteredIslands[0].replace(/\s+/g, "")]);

    let islandArray = imagesToDisplay[0][listOfFilteredIslands[0].replace(/\s+/g, "")][0]; //gives first combonation for entbrat (first in images to display)
    console.log("island 3333 "+islandArray);
    //

    return(
        //
        imagesToDisplay.map((image) => {
            return image.PlantIsland.map((combonation) => {
            //System.out.println("hi")
            // console.log("combonation "+combonation);
            return iterateThroughImages(combonation, image); //combo image
            
            
        })
    })
    )

    // return (
    //     imagesToDisplay.map((image, index) => ( //imagesToDisplay.map((image, index) => {
    //         //image.PlantIsland.map((combonation) => {
    //         console.log("island 2222 "+combonation+ Array.isArray(combonation));
            
    //         // return iterateThroughImages(combonation, image);

    //         <div className="allImageEquation"> 
    //             <div className="normEntbrat">
    //                 <img src={islandArray[0]} alt={"idk"} />
    //                 <p className="plusSign">+</p>
    //                 <img src={islandArray[1]} alt={"idk"} />
    //                 <div className="equalSign">
    //                     <p>=</p>
    //                 </div>
    //                 <img src={image.src} alt={image.alt} />
    //             </div>
    //         </div>
    //     )
    // )
    // )
    //
}
    export default HandleSelectedOptions

    function PopulateImagesToDisplay(selectedOptions, images){
        console.log("Attributes for normEntbrat:", images["normEntbrat"].attributes);
        console.log("plant combs for normEntbrat:", images["normEntbrat"].PlantIsland);

        const imagesToDisplay = []
        // const listOfFilteredIslands = []
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
                    if(option.label.includes("Island")) {
                        console.log("includesisland")
                        listOfFilteredIslands.push(option.label)
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
                if(option.label.includes("Island")) {
                    listOfFilteredIslands.push(option.label)
                }
                imagesToDisplay.forEach((image) => { //for each image in imagesToDisplay, remove if it doesn't match option
                    if (!image.attributes.includes(option.label)) {
                        imagesToDisplay.remove(image);
                    }
                })
            }
        }
        // console.log("11111 ",imagesToDisplay[0].src.[listOfFilteredIslands[0]])
        console.log("11111 ",imagesToDisplay[0][listOfFilteredIslands[0].replace(/\s+/g, "")]) //regex to replace all spaces and whitespace with ""

        //go through imagesToDisplay, get their combonations
        for (let i = 0; i < imagesToDisplay.length; i++) {
            imagesToDisplay[i][listOfFilteredIslands[0].replace(/\s+/g, "")]
            //let ooh = imagesToDisplay[0]
            //console.log("on ", ooh[listOfFilteredIslands[0].replace(/\s+/g, "")][0])
            console.log("back ",imagesToDisplay[0][listOfFilteredIslands[0].replace(/\s+/g, "")][0][0])
            // <img src={normMaw} alt={"idk"} />
        }
        //go through the combonations seperating at spaces. This is the sources, get images pulled up with proper formatting


        // images[imagesToDisplay[0].src].listOfFilteredIslands[0]
        //
        //use index outside of loop to pick up from there, and refine through the rest of the options
        //
        return imagesToDisplay;
        }

    function iterateThroughImages(islandArray, image){//, index) {
        console.log("fjovrjor "+islandArray+"     "+islandArray[0]+"      "+Array.isArray(islandArray)); //island array is undefined
        return (
            <div className="allImageEquation">
                <div className="normEntbrat">
                    <img src={islandArray[0]} alt={"idk"} />
                    <p className="plusSign">+</p>
                    <img src={islandArray[1]} alt={"idk"} />
                    <div className="equalSign">
                        <p>=</p>
                    </div>
                    <img src={image.src} alt={image.alt} />
                    {/* fix above line. Cant use image.src has  to be something else. Maybe another loop :( */}
                </div>
            </div>
        );
    }