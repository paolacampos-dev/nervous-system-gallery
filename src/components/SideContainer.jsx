function SideContainer({ images, onSelect, side })    {
    return (
        <div className={side}>
            {images.map(img => (
                <div key={img.title} className="thumb">           
                    <img
                        src={img.thumb}
                        alt={img.title}
                        onClick={() => onSelect(img)}
                    />
                    <p className="thumb-title">{img.displayTitle} 
                    </p>
                </div>
            ))}
        </div>
    );
}
export default SideContainer;