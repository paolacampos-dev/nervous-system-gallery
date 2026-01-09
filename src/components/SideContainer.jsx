export default function SideContainer({ images, onSelect, customTitles, side })    {
    return (
        <div className={`side ${side}`}>
            {images.map(img => (
                <div key={img.id} className="thumb">           
                    <img
                        src={img.thumb}
                        alt={img.title}
                        onClick={() => onSelect(img)}
                    />
                    <p className="thumb-title">{customTitles[img.title]} 
                    </p>
                </div>
            ))}
        </div>
    );
}
