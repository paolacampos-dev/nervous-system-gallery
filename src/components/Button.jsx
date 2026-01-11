 function ChooseTopic({theTopic, chTopic})    {
        return(
        <>
        <button className="galleries-button" onClick={() => chTopic(theTopic)}>{theTopic}</button>  
        </>
    )
}
export default ChooseTopic;
