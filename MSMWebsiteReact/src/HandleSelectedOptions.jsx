import monsterImages from './monsterImages.json';

const listOfFilteredIslands = []

function HandleSelectedOptions({ selectedOptions }) {
    console.log("hi, these are your selected labels", selectedOptions.map(option => option.label)) //.map creates a new array by applying a function to each element in the original array.
    console.log("that ")
    let imagesToDisplay = PopulateImagesToDisplay(selectedOptions, monsterImages);

    console.log("filtered islands "+listOfFilteredIslands);
    if (listOfFilteredIslands.length>0) {
        let islandArray = imagesToDisplay[0].Islands[listOfFilteredIslands[0].replace(/\s+/g, "")][0]; //gives first combonation for entbrat (first in images to display)
        // console.log("**** "+imagesToDisplay[0].Islands.PlantIsland);
    }

    console.log("2222 imagesToDisplay",imagesToDisplay);
    return(
        imagesToDisplay.map((image) => {
            console.log("3333 ");
            if (listOfFilteredIslands.length > 0) {
                return image.Islands[listOfFilteredIslands[0].replace(/\s+/g, "")].map((combonation) => {
                    console.log("no "+combonation);
                    return iterateThroughImages(combonation, image); //combo image
                })
            }

            else {
                //listOfAllIslands or iterate through parts of src? Or from whatever index onward
                console.log("moment "+image.Islands.PlantIsland);


                console.log("enough "+Object.keys(image.Islands));//.map((combination) => combination[0]));
                return Object.keys(image.Islands).map((island) => {
                    console.log("brothers "+island);
                    console.log("thing "+island);
                    return image.Islands[island].map((combination) => {
                        // console.log("combination: ", combination)
                        return iterateThroughIslandCombinations(combination, image, island);//iterateThroughImages(combination, image);
                    }
                    );

                    //console.log("hthtth "+);
                    // Object.entries(combonation).map(([key,value]) => {
                    //     console.log("testDos "+ key+" value "+value);
                    // })
                })

                return iterateThroughIslandCombinations(image);//iterateThroughImages(imagesToDisplay, image);
            }
        })
    )
}
    export default HandleSelectedOptions

    function PopulateImagesToDisplay(selectedOptions, images){
        console.log("that 2222 "+selectedOptions.map(option => option.label))
        let imagesToDisplay = []
        let hasHadAnImagePassOneFilter = false
        let selectedOptionsIndex = -1;
        selectedOptions.some((option,index) => { //use map to loop over selectedOptions. For each option, checks if the label is "Plant Island".
            Object.values(images).forEach(image => {
                    if (image.attributes.includes(option.label) && (!imagesToDisplay.includes(image))) { //if (image.attributes.includes(option.label)) //if exploring possibilities with first option
                        imagesToDisplay.push(image)
                        hasHadAnImagePassOneFilter=true
                    }
                    if(option.label.includes("Island")) {
                        console.log("includesisland "+option.label)
                        listOfFilteredIslands.push(option.label)
                        console.log("testlength "+listOfFilteredIslands.length)
                    }
                    if(hasHadAnImagePassOneFilter == true) {
                        selectedOptionsIndex = index;
                        console.log("selected options 6666 "+listOfFilteredIslands.length+" "+imagesToDisplay.length);
                        return;
                    }

                },
                )
            })
        if(selectedOptionsIndex != -1) {
            console.log("selected options 1111 "+selectedOptions)
            for(let i = selectedOptionsIndex; i < selectedOptions.length; i++) {
                let option = selectedOptions[i];
                if(option.label.includes("Island")) {
                    listOfFilteredIslands.push(option.label)
                }
                // imagesToDisplay.forEach((image) => { //for each image in imagesToDisplay, remove if it doesn't match option
                //     if (!image.attributes.includes(option.label)) {
                //         imagesToDisplay.remove(image);
                //     }

                // })
                imagesToDisplay.filter((image) => (
                    console.log("2/9")));
                    //!image.attributes.includes(option.label)));
                }
        }

        //go through imagesToDisplay, get their combonations
        for (let i = 0; i < imagesToDisplay.length; i++) {
            if (listOfFilteredIslands.length > 0) {
                imagesToDisplay[i][listOfFilteredIslands[0].replace(/\s+/g, "")]
            }
        }

        return imagesToDisplay;
        }

    function iterateThroughImages(combonation, image){//, index) {
        console.log("fjovrjor "+monsterImages["PlantIsland"]); //island array is undefined
        return (
        <div className = "everything">
            <div className="allImageEquation">
                <div className = "island">
                    <img src={monsterImages[listOfFilteredIslands[0].replace(/\s+/g, "")].src} alt={listOfFilteredIslands[0].replace(/\s+/g, "")} />
                </div>
                <div className="normEntbrat">
                {/* <img src={monsterImages.PlantIsland.src} alt={"idk"} /> */}
                    <img src={combonation[0]} alt={"idk"} />
                    <p className="plusSign">+</p>
                    <img src={combonation[1]} alt={"idk"} />
                    <div className="equalSign">
                        <p>=</p>
                    </div>
                    <img src={image.src} alt={image.alt} />
                </div>
            </div>
        </div>
        );
    }

    function iterateThroughIslandCombinations(combination, image, island) { //imageKey) {
        console.log("mon "+combination[0]+" island "+island);
        //not returning properly
        if (island != undefined) {
            console.log("Rendering test component...");
            // return (
            //     <div>
            //       <p>Test: Is this component rendering?</p>
            //       <img src={monsterImages["PlantIsland"]?.src} alt="Testing Image" />
            //     </div>
            //   );
        return (
            <div className = "everything">
                <div className="allImageEquation">
                    <div className = "island">
                        <img src={monsterImages[island].src} alt={"idk"} />
                        {/* {monsterImages[island].src} */}
                    </div>
                    <div className="normEntbrat">
                        <img src={combination[0]} alt={combination[0]} />
                        <p className="plusSign">+</p>
                        <img src={combination[1]} alt={"idk"} />
                        <div className="equalSign">
                            <p>=</p>
                        </div>
                        <img src={image.src} alt={"idk"} />
                    </div>
                </div>
            </div>
            );
        }

        // console.log("test1 "+ imageKey.alt);
        // Object.entries(imageKey).map(([key,value]) => {
        //     console.log("test "+ key+" value "+value);
        //     if (key.includes("Island")) {
        //         console.log("contains isl");
        //     }
        // })
        //go through entries
    }
