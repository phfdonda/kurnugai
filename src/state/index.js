import { atom } from "nanostores"

export const $attributesData = atom([
    {
        name: "Corpo",
        attributes: [
            { name: "Força", points: 2 },
            { name: "Destreza", points: 3 },
            { name: "Vigor", points: 3 },
        ],
    },
    {
        name: "Mente",
        attributes: [
            { name: "Percepção", points: 2 },
            { name: "Inteligência", points: 2 },
            { name: "Raciocínio", points: 2 },
        ],
    },
    {
        name: "Alma",
        attributes: [
            { name: "Presença", points: 2 },
            { name: "Vontade", points: 4 },
            { name: "Sintonia", points: 2 },
        ],
    },
])

export function updateAttribute(progress) {
    $attributesData.set([...$attributesData.get(), progress])
}
