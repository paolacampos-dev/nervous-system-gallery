function CenterContainer({ selected, customTitles })   {
    return(
<div className="center">
            {selected ? (
            <div className="center-content">
                <img
                    className="magnifier"
                    src={selected.full}
                    alt={selected.title}
                />
                <p className="center-title">{customTitles[selected.title]}
                </p>
            </div>
            ) : (
            <p>Select an image</p>
            )}
        </div>
    )
}
export default CenterContainer;