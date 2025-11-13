"use strict"

import { getArray, setArray } from "./commands.js"
import { DOMFacade } from "../ui/facade.js"

export class LSManager {
    static saveToLocal() {
        localStorage.setItem(0, JSON.stringify(getArray()))
    }
    static loadLocal() {
        const task = localStorage.getItem(0)
        
        if (task !== null) {
            setArray(JSON.parse(task))
            for (let i = 0; i < getArray().length; i++) {
                const element = getArray()[i];
                DOMFacade.addTaskToList(element)
            }
        }
    }
    static clearLocal() {
        localStorage.clear()
    }
}