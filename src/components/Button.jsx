 function ChooseTopic({theTopic, chTopic})    {
        return(
        <>
        <button onClick={() => chTopic(theTopic)}>{theTopic}</button>
        </>
    )
}
export default ChooseTopic;