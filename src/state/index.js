import { atom } from "nanostores"

export const $attributesData = atom([
    {
        name: "Corpo",
        attributes: [
            { name: "Força", points: 1 },
            { name: "Destreza", points: 1 },
            { name: "Vigor", points: 1 },
        ],
    },
    {
        name: "Mente",
        attributes: [
            { name: "Percepção", points: 1 },
            { name: "Inteligência", points: 1 },
            { name: "Raciocínio", points: 1 },
        ],
    },
    {
        name: "Alma",
        attributes: [
            { name: "Presença", points: 1 },
            { name: "Vontade", points: 1 },
            { name: "Sintonia", points: 1 },
        ],
    },
])

export function updateAttribute(progress) {
    $attributesData.set([...$attributesData.get(), progress])
}
