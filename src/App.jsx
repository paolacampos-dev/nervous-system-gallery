import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx"
import LandingPage from "./components/LandingPage.jsx";
import Gallery from "./components/Gallery.jsx"




export default function App ()  {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [images, setImages] = useState([])


useEffect(() => {
  if(!selectedGallery) return;
  /*console.log("Gallery", selectedGallery) 

  if(!Array.isArray(selectedGallery.images))  {
    console.error("image is not an array", selectedGallery); 
    return
  }*/

  async function fetchImages() {
    const wikiTitles = selectedGallery.images.map(item =>item.wikiTitle)
    const params =
     "?action=query" + //Hey API I want to ask something
        "&prop=imageinfo" + // prop (properties which ones from the page)
        "&titles=" + encodeURIComponent(wikiTitles.join("|")) + // tells the specific page to get and extract from. 
                                                            //The | (pipe) symbolizes “AND” (a list).
        "&iiprop=url" + // ii(image info) gives the url to the file and the descript file
        "&iiurlwidth=150" + //thumbnail
        "&format=json" + // request the data in JSON format
        "&origin=*";  // omiting this params causes  a CORS error

    const res = await fetch(
      `https://commons.wikimedia.org/w/api.php${params}`
    );
    const data = await res.json();

    const normalizedImages = Object.values(data.query.pages)
      .map((page, index) => {
            const info = page.imageinfo[0];
    
    const meta = selectedGallery.images.find(
      item => item.wikiTitle === page.title);

          return {
            id: page.pageid,
            wikititle:meta.wikiTitle,
            displayTitle:meta.displayTitle,
            thumb: info.thumburl,
            full: info.url
        };
      })
    setImages(normalizedImages);
    console.log(normalizedImages)
  }
  fetchImages();  
}, [selectedGallery]);


return (
    <>
        <Header onSelectTopic = {setSelectedGallery} />

        <main>
          {!selectedGallery && <LandingPage />} 
          {selectedGallery && <Gallery gallery={selectedGallery} images={images} />} 
        </main>
    </>
  );
}


