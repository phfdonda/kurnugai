// This component groups 10 Circles and 10 Squares, the first marking the permanent points for the respective counter, and the last the temporary points
// ************************************************************************************

import Circle from "./Circle"
import Square from "./Square"
import './styles/Counter.scss'

const Counter = (props) => {
    const { name = "Nome do Contador" } = props
    return (
        <div className="counter">
            <div className="counter-name">
                <h1>{name}</h1>
            </div>
            <div className="max-points">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="temporary-points">
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

export default Counter