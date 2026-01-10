import ChooseTopic from "./Button.jsx"
import { galleries } from  "../Data/Galleries.js"

 function Header({onSelectTopic})   {
    return(
        <div className="header">

            {Object.keys(galleries).map(name =>( // Object.Keys extracts the values of the keys of the object and give it back as an array then .map iterates it
                <ChooseTopic
                    Key={name}
                    theTopic={name}
                    chTopic={() => onSelectTopic(galleries[name])}/> //chTopic is the event handler (the function)
            ))}
        </div>
    )
}

export default Header;