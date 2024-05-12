// A Circle marks a permanent point of a characteristic or a counter
// When selecting a point during the Character Build (or when adding an item in inventory), the selected point and all empty before should be half filled with a small dot.
// After the character is built (or item added), the set points are filled completely.
// *********************************************************************
import { useState } from 'react'
import './styles/Circle.scss'
const Circle = () => {
    const permanent = false
    const charBuilding = true
    const key = 1

    const [selected, setSelected] = useState(false)
    const handleSelection = (e) => {
        e.stopPropagation()
        setSelected(!selected)
    }
    console.log(selected)

    return (
        <div className={`circle ${permanent ? 'filled' : ''}`}>
            {
                !permanent && charBuilding ?
                    <div onClick={handleSelection} className={`filler ${selected ? 'selected' : ''}`}></div>
                    :
                    false
            }
        </div >
    )
}

export default Circle