import ChooseTopic from "./Button.jsx"
import galleries from "../Data/Galleries.js"


 function Header({onSelectTopic})   {

    return(
        <div className="header">

            {Object.keys(galleries).map(name =>( // Object.Keys extracts the values of the keys of the object and give it back as an array then .map iterates it
                <ChooseTopic
                    key={name}
                    theTopic={name}
                    chTopic={() => onSelectTopic(galleries[name])}/> 
                    //chTopic is the event handler-EH (the function) ==> when clicked pass the object(galleries[name])
            ))}
        </div>
    )
}

export default Header;