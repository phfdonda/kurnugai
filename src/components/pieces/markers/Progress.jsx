// This component groups 5 Circles (Ability Point) and 10 Squares (Experience Points) for each respective Characteristic (Attributes, Skills, Talents, Techniques)
// **********************************************************************************************************************

import Circle from "./Circle"
import Square from "./Square"
import './styles/Progress.scss'

const Progress = (props) => {
    const { name, points } = props
    const renderPermanentCircles = () => {
        const permanentCircles = []
        for (let i = 0;i < points;i++) {
            permanentCircles.push(< Circle key={`permPoint-${i}`} permanent={true} />)
        }
        return permanentCircles
    }
    const renderEmptyCircles = () => {
        const emptyCircles = []
        for (let i = 0;i < 5 - points;i++) {
            emptyCircles.push(< Circle key={`emptyPoint-${i}`} />)
        }
        return emptyCircles
    }

    return (
        <div className="progress">
            <div className="progress-name">
                <h1>{name}</h1>
            </div>
            <div className="circles">
                {renderPermanentCircles()}
                {renderEmptyCircles()}

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