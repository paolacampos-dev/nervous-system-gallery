import { useState } from "react";

import CenterContainer from "./CenterContainer.jsx";
import SideContainer from "./SideContainer.jsx";


function Gallery ({ gallery, images })   {
    if(!gallery) return null;

    const [selectedImage, setSelectedImage] = useState(null);

    return(
        <div className="layout"> 
            <CenterContainer
                selected={selectedImage}
            />
            <SideContainer
                images={images}
                onSelect={setSelectedImage}
            />
        </div>
    )
}
export default Gallery;