import { useEffect, useState } from "react";
import "./App.css";
import Titles from "./components/Titles"
import SideContainer from "./components/SideContainer";
import CenterContainer from "./components/CenterContainer";

export default function App ()  {
  const [topic, setTopic] = useState([]);
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState([]);

const titles = [
  "File:Migration of Neural Crest Cells (v2).jpg",
  "File:DrPaulineNeveu 03 Tube neural cadre d etude.svg",
  "File:DrPaulineNeveu 03 Apparition Vesicules.png",
  "File:DrPaulineNeveu 03 Embryo SNC courbures.svg",
  "File:Superior View of the Brain.jpg",
  "File:Encéfalo.jpg",
  "File:Lobulos cerebrales.png",
  "File:Brain stem parts.png",
  "File:Gray719.png",
  "File:Nervous system organization en.svg",
  "File:1205 Somatic Autonomic Enteric StructuresN.jpg",
  "File:Peripheral Nervous System.jpg"
];

const customTitles = [
"File:Migration of Neural Crest Cells (v2).jpg : Migration of Neural Crest Cells",
"File:DrPaulineNeveu 03 Tube neural cadre d etude.svg : Neural Tube – Study Framework", 
"File:DrPaulineNeveu 03 Apparition Vesicules.png : Appearance of Brain Vesicles", 
"File:DrPaulineNeveu 03 Embryo SNC courbures.svg : Embryonic CNS Curvatures", 
"File:Superior View of the Brain.jpg : Superior view of the brain",
"File:Encéfalo.jpg : Encephalon", 
"File:Lobulos cerebrales.png : Cerebral Lobes", 
"File:Brain stem parts.png : Parts of the Brainstem", 
"File:Gray719.png : Spinal Cord Cross-Section (Gray 719)", 
"File:Nervous system organization en.svg : Organization of the Nervous System", 
"File:1205 Somatic Autonomic Enteric StructuresN.jpg : Somatic, Autonomic & Enteric Nervous Systems", 
"File:Peripheral Nervous System.jpg : Peripheral Nervous System"
]

useEffect(() => {
  async function fetchImages() {
    const params =
     "?action=query" + //Hey API I want to ask something
        "&prop=imageinfo" + // prop (properties which ones from the page)
        "&titles=" + encodeURIComponent(titles.join("|")) + // tells the specific page to get and extract from. 
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
}, []);

const leftImages = images.slice(0, 6);
const rightImages = images.slice(6, 12);

return (
 <>
    <Titles/>

    <div className="layout">

      <SideContainer
        images={leftImages}
        onSelect={setSelected}
        customTitles={customTitles}
        side="left"
      />

      <CenterContainer
        selected={selected}
        customTitles={customTitles}
      />

      <SideContainer
        images={rightImages}
        onSelect={setSelected}
        customTitles={customTitles}
        side="right"
      />
    </div>
  </>
);
}