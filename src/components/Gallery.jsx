import { useState } from React;

import CenterContainer from "./CenterContainer.jsx";
import SideContainer from "./SideContainer.jsx";


function Gallery ({ selectedTopic})   {
    const { images, leftColumnTittle, rightColumnTitle, } = gallery

    const [selectedImage, setSelectedImage] = useState(null);

    const mid = Math.ceil(images.length / 2);
    const leftImages = images.slice(0, mid);
    const rightImages = images.slice(mid);



    return(
        <div className="layout"> 

            <SideContainer
                images={leftImages}
                onSelect={selectedImage}
                customTitles={displayTitle}
                side={leftColumnTittle}
            />

            <CenterContainer
                selected={selectedImage}
                customTitles={displayTitle}
            />

            <SideContainer
                images={rightImages}
                onSelect={selectedImage}
                customTitles={displayTitle}
                side={rightColumnTitle}
            />
    </div>
    )
}
export default Gallery