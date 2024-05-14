// These are the abilities rolled for tests, grouped with their relative Talents. XP are given every successful test, and for every 10 XP points, a new skill point is gained, and a single XP is sent for the relative Talent.
// ************************************************************************

import { useState } from "react";
import { $skillsData } from "src/state/points.context.js"



const Skills = () => {
    const [isOpen, setIsOpen] = useState(false)
    const skillsData = $skillsData.get()

    return (
        <div className="skills">
            <h1>Skills</h1>
        </div>
    )
}

export default Skills