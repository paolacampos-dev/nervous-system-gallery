import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header"
import LandingPage from "./components/LandingPage";
import Gallery from "./components/Gallery"


export default function App ()  {
  const [selectedGallery, setSelectedGallery] = useState(null);


useEffect(() => {
  async function fetchImages(selectedGallery) {
    const wikiTitles = selectedGallery.images.map(item => item.wikiTitle)
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
      .map(page => {
            const info = page.imageinfo[0];
          return {
            id: page.pageid,
            title: page.title.replace("File:", ""),
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

        <Main>
          {!selectedGallery && <LandingPage />}
          {selectedGallery && <Gallery selectedtopic={selectedGallery} />}
        </Main>
    </>
  );
}


