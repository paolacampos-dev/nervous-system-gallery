function CenterContainer({ selected })   {
    return(
<div className="center">
            {selected ? (
            <div className="center-content">
                <p className="center-title">{selected.displayTitle}
                </p>
                <img
                    className="magnifier"
                    src={selected.full}
                    alt={selected.displayTitle}
                />
            </div>
            ) : (
            <p className="center-p">Select an image</p>
            )}
        </div>
    )
}
export default CenterContainer;