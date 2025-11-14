"use strict"

import { TaskFactory } from "../patterns/factory.js"
import { DOMFacade } from "../ui/facade.js"

let arrayTask = new Array()

export function addTask() {
    const titulo = document.getElementById("title").value
    const desc = document.getElementById("desc").value
    const prio = document.getElementById("prio").value
    const done = false
    const create = new Date()

    const tarea = TaskFactory.crearTarea(titulo, desc, prio, done, create)

    DOMFacade.reloadList(arrayTask)

    arrayTask.push(tarea)

    DOMFacade.addTaskToList(tarea)

    document.getElementById("formAdd").classList.add("disabled")
}
export function removeAllTask(confirmed) {
    if (confirmed) {
        DOMFacade.clearAllTask()
    }
    document.getElementById("borrarTodo").classList.add("disabled")
}
export function removeTask(id) {
    const placeHolder = arrayTask

    arrayTask = new Array()

    placeHolder.forEach(element => {
        if (element.id !== parseInt(id)) {
            arrayTask.push(element)
        }
    });

    DOMFacade.reloadList(arrayTask)
}
export function completedTask(id) {
    arrayTask.forEach(element => {
        if (element.id === parseInt(id)) {
            element.done = true
        }
    });

    DOMFacade.reloadList(arrayTask)

    document.getElementById("formCompleted").classList.add("disabled")
}
export function filtrarTareas(modo, valor) {
    let placeHolder = new Array()

    if (modo === "estado") {
        if (valor === "completado") {
            arrayTask.forEach(element => {
                if (element.done === true) {
                    placeHolder.push(element)
                }
            });
        } else {
            arrayTask.forEach(element => {
                if (element.done === false) {
                    placeHolder.push(element)
                }
            });
        }
    } else if (modo === "prioridad") {
        arrayTask.forEach(element => {
            if (element.priority === valor) {
                placeHolder.push(element)
            }
        });
    } else if (modo === "desfiltrar") {
        placeHolder = arrayTask
    }

    DOMFacade.reloadList(placeHolder)

    document.getElementById("formFiltrar").classList.add("disabled")
}

export function menuOpen(menu) {
    switch (menu) {
        case "Añadir":
            DOMFacade.openAdd()
            break;
        case "Completar":
            DOMFacade.openComplete()
            break;
        case "Borrar":
            DOMFacade.openDelete()
            break;
        case "Filtrar":
            DOMFacade.openFilter()
            break;
        case "BorrarTodo":
            DOMFacade.openClearAll()
            break;
        default:
            break;
    }
}

export function getArray() {
    return arrayTask
}
export function setArray(newArray) {
    arrayTask = newArray
}