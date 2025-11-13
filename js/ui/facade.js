"use strict"

export class DOMFacade {
    static addTaskToList(Task) {
        const section = document.getElementById("tablaTM")

        const p = document.createElement("p")

        let text = document.createTextNode("Id: " + Task.id + " | Nombre: " + Task.title + " | Descripción: " + Task.description + " | Prioridad: " + Task.priority + " | Completada: " + Task.done + " | Creada: " + Task.createAt)
        p.appendChild(text)

        section.appendChild(p)
    }

    static reloadList(arrayTask) {
        const section = document.getElementById("tablaTM")

        section.innerHTML = ""

        arrayTask.forEach(element => {
            this.addTaskToList(element)
        });
    }

    static clearAllTask() {
        const section = document.getElementById("tablaTM")

        section.innerHTML = ""
    }

    static openAdd() {
        document.getElementById("formAdd").classList.remove("disabled")
        
        document.getElementById("borrarTodo").classList.add("disabled")
        document.getElementById("formCompleted").classList.add("disabled")
        document.getElementById("formDelete").classList.add("disabled")
        document.getElementById("formFiltrar").classList.add("disabled")
    }
    static openComplete() {
        document.getElementById("formCompleted").classList.remove("disabled")

        document.getElementById("borrarTodo").classList.add("disabled")
        document.getElementById("formAdd").classList.add("disabled")
        document.getElementById("formDelete").classList.add("disabled")
        document.getElementById("formFiltrar").classList.add("disabled")
    }
    static openDelete() {
        document.getElementById("formDelete").classList.remove("disabled")

        document.getElementById("formCompleted").classList.add("disabled")
        document.getElementById("borrarTodo").classList.add("disabled")
        document.getElementById("formAdd").classList.add("disabled")
        document.getElementById("formFiltrar").classList.add("disabled")
    }
    static openFilter() {
        document.getElementById("formFiltrar").classList.remove("disabled")

        document.getElementById("formCompleted").classList.add("disabled")
        document.getElementById("borrarTodo").classList.add("disabled")
        document.getElementById("formAdd").classList.add("disabled")
        document.getElementById("formDelete").classList.add("disabled")
    }
    static openClearAll() {
        document.getElementById("borrarTodo").classList.remove("disabled")
        
        document.getElementById("formAdd").classList.add("disabled")
        document.getElementById("formCompleted").classList.add("disabled")
        document.getElementById("formDelete").classList.add("disabled")
        document.getElementById("formFiltrar").classList.add("disabled")
    }
}