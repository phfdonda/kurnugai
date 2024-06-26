// This subsection holds all limiter characteristics. These are not used in rolls, but instead are limiters to Talents. No Talent can be bigger than its Attribute limiter. 
// For each 10 XP, one Attribute is gained, and one Advantage can be chosen.
// ******************************************************************************
import { useState } from "react";
import Progress from "src/components/pieces/markers/Progress";
import { $attributesData } from "src/state/points.context.js"
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
                    <li key={type.name} className='attributes-section'>
                        <div className="type-title">
                            <h1>{type.name}</h1>
                        </div>
                        {
                            type.attributes.map((attribute) => {
                                return (
                                    <Progress key={attribute.key} title={attribute.title} points={attribute.points} />
                                )
                            })
                        }
                    </li>
                )
            })
            return attributes
        }

        return (
            <section className="attributes">
                <button onClick={toggleAttributeSection} type="button" className={`attributes-section-title ${isOpen ? 'sticky' : ''}`}><h1>Atributos</h1></button>
                {
                    isOpen &&
                    <ul>{renderAttributes()}</ul>
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