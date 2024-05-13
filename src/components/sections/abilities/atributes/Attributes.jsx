// This subsection holds all limiter characteristics. These are not used in rolls, but instead are limiters to Talents. No Talent can be bigger than its Attribute limiter. 
// For each 10 XP, one Attribute is gained, and one Advantage can be chosen.
// ******************************************************************************

import Progress from "src/components/pieces/markers/Progress";
import { $attributesData } from "src/state"
import './styles/Attributes.scss'

const Attributes = () => {
    const attributesData = $attributesData.get()
    console.log(attributesData)

    const renderAttributes = () => {
        return attributesData.map((type) => {
            return (
                <section key={type.name} className='attributes-section'>
                    <div className="type-title">
                        <h1>{type.name}</h1>
                    </div>
                    {
                        type.attributes.map((attribute) => {
                            return (
                                <Progress key={attribute.name} name={attribute.name} points={attribute.points} />
                            )
                        })
                    }
                </section>
            )
        })
    }

    return (
        <div className="attributes">
            {
                renderAttributes()
            }
        </div>
    )

}

export default Attributes