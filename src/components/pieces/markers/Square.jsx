// Squares are temporary points to be easily erased (if the sheet is printed). They are filled with a dash.
// Squares are primarily used in two cases: Experience Points and Counters.
// *********************************************************************
import { useState } from 'react'
import './styles/Square.scss'
const Square = () => {
    const key = 1

    const [selected, setSelected] = useState(false)
    const handleSelection = (e) => {
        e.stopPropagation()
        setSelected(!selected)
    }
    console.log(selected)

    return (
        <div onClick={handleSelection} className={`square ${selected ? 'filled' : ''}`}>
            <div classname="square-filler"></div>
        </div >
    )
}

export default Square