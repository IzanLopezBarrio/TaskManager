export class Task {
    constructor(nombre, desc, priori, comple, crea) {
        this.id = Date.now()
        this.title = nombre
        this.description = desc
        this.priority = priori
        this.done = comple
        this.createAt = new Date(crea)
    }
}