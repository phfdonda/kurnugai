// This subsection holds all limiter characteristics. These are not used in rolls, but instead are limiters to Talents. No Talent can be bigger than its Attribute limiter. 
// For each 10 XP, one Attribute is gained, and one Advantage can be chosen.
// ******************************************************************************
import { useState } from "react";
import Progress from "src/components/pieces/markers/Progress";
import { $attributesData } from "src/state"
import './styles/Attributes.scss'

const Attributes = () => {
    const [isOpen, setIsOpen] = useState(false)
    const attributesData = $attributesData.get()

    const renderAttributes = () => {
        const toggleAttributeSection = (e) => {
            e.stopPropagation()
            setIsOpen(!isOpen)
        }
        const renderAttributes = () => {
            const attributes = []
            attributesData.map((type) => {
                attributes.push(
                    <div key={type.name} className='attributes-section'>
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
                    </div>
                )
            })
            return attributes
        }

        return (
            <section onClick={toggleAttributeSection} className="attributes">
                <button type="button" className="attributes-section-title"><h1>Attributes</h1></button>
                {isOpen &&
                    <div>
                        {renderAttributes()}
                    </div>

                }
            </section >
        )

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