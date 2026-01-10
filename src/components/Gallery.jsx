import { useState } from "react";

import CenterContainer from "./CenterContainer.jsx";
import SideContainer from "./SideContainer.jsx";


function Gallery ({ gallery })   {
    if(!gallery) return null;
    const { images, leftColumnTitle, rightColumnTitle, } = gallery //desestructuring the Object (gallery[name]) coming from header the EH of the button

    const [selectedImage, setSelectedImage] = useState(null);

    const mid = Math.ceil(images.length / 2);
    const leftImages = images.slice(0, mid);
    const rightImages = images.slice(mid);

    return(
        <div className="layout"> 

            <SideContainer
                images={leftImages}
                onSelectTopic={setSelectedImage}
                side={leftColumnTitle}
            />

            <CenterContainer
                selected={selectedImage}
            />

            <SideContainer
                images={rightImages}
                onSelectTopic={setSelectedImage}
                side={rightColumnTitle}
            />
    </div>
    )
}
export default Gallery