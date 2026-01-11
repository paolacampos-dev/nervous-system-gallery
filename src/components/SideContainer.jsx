
function SideContainer({ images, onSelect })    {
    //(!images)return null;

    return (
        <div className="thumb-cont">
            {images.map(img => (
                <button key={img.id} className="thumb"> 

                    <p className="thumb-title">{img.displayTitle} 
                    </p>  

                    <img className="thumb-image"
                        src={img.thumb}
                        alt={img.displayTitle}
                        onClick={() => onSelect(img)}
                    />
                    
                </button>
            ))}
        </div>
    );
}
export default SideContainer;