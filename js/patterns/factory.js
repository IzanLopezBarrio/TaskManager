import { Task } from "../Objeto/TaskManager.js"

export class TaskFactory {
    static crearTarea(nombre, desc, priori, comple, crea) {
        if (nombre === "") {
            nombre = "TareaSinNombre"
        }
        if (desc === "") {
            desc = "No se proporcionó una descripción"
        }

        return new Task(nombre, desc, priori, comple, crea)
    }
}