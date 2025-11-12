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
}