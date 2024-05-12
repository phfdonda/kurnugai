// This component groups 5 Circles (Ability Point) and 10 Squares (Experience Points) for each respective Characteristic (Attributes, Skills, Talents, Techniques)
// **********************************************************************************************************************

import Circle from "./Circle"
import Square from "./Square"
import './styles/Progress.scss'

const Progress = () => {
    return (<div className="progress">
        <div className="circles">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
        </div>
        <div className="squares">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>


    </div>
    )
}

export default Progress