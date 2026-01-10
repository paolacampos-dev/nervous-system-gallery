function CenterContainer({ selected })   {
    return(
<div className="center">
            {selected ? (
            <div className="center-content">
                <img
                    className="magnifier"
                    src={selected.full}
                    alt={selected.title}
                />
                <p className="center-title">{selected.displayTitle}
                </p>
            </div>
            ) : (
            <p>Select an image</p>
            )}
        </div>
    )
}
export default CenterContainer;