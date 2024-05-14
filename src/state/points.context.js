import { atom } from "nanostores"
import ATTRIBUTES from "src/data/attributes.json"

export const $attributesData = atom(ATTRIBUTES)

export function updateAttribute(progress) {
    $attributesData.set([...$attributesData.get(), progress])
}
