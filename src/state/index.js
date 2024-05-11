import { atom } from "nanostores"

export const $array = atom([])

export function addItemInArray(newThing) {
    $array.set([...$array.get(), newThing])
}
