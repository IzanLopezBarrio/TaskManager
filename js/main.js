import { addTask, completedTask, filtrarTareas, removeAllTask, removeTask } from "./actions/commands.js"
import { LSManager } from "./actions/localStorageManager.js"

LSManager.loadLocal()

const btnShowAdd = document.getElementById("openAdd")
btnShowAdd.addEventListener("click", (event) => {
    document.getElementById("formAdd").classList.remove("disabled")

    document.getElementById("borrarTodo").classList.add("disabled")
    document.getElementById("formCompleted").classList.add("disabled")
    document.getElementById("formDelete").classList.add("disabled")
    document.getElementById("formFiltrar").classList.add("disabled")
})
const btnAddTask = document.getElementById("addTask")
btnAddTask.addEventListener("click", (event) => {
    event.preventDefault()

    addTask()

    LSManager.saveToLocal()
})

const btnShowCompleted = document.getElementById("openComplete")
btnShowCompleted.addEventListener("click", (event) => {
    document.getElementById("formCompleted").classList.remove("disabled")

    document.getElementById("borrarTodo").classList.add("disabled")
    document.getElementById("formAdd").classList.add("disabled")
    document.getElementById("formDelete").classList.add("disabled")
    document.getElementById("formFiltrar").classList.add("disabled")
})
const btnCompleted = document.getElementById("marcarComoCompletado")
btnCompleted.addEventListener("click", (event) => {
    event.preventDefault()

    const id = document.getElementById("id").value
    completedTask(id)

    LSManager.saveToLocal()
})

const btnShowDel = document.getElementById("openDelete")
btnShowDel.addEventListener("click", (event) => {
    document.getElementById("formDelete").classList.remove("disabled")

    document.getElementById("formCompleted").classList.add("disabled")
    document.getElementById("borrarTodo").classList.add("disabled")
    document.getElementById("formAdd").classList.add("disabled")
    document.getElementById("formFiltrar").classList.add("disabled")
})
const btnDel = document.getElementById("borrarTarea")
btnDel.addEventListener("click", (event) => {
    event.preventDefault()

    const id = document.getElementById("removeID").value
    removeTask(id)

    document.getElementById("formDelete").classList.add("disabled")

    LSManager.saveToLocal()
})

const btnShowFiltro = document.getElementById("openFilter")
btnShowFiltro.addEventListener("click", (event) => {
    document.getElementById("formFiltrar").classList.remove("disabled")

    document.getElementById("formCompleted").classList.add("disabled")
    document.getElementById("borrarTodo").classList.add("disabled")
    document.getElementById("formAdd").classList.add("disabled")
    document.getElementById("formDelete").classList.add("disabled")
})
const btnFiltroCompletada = document.getElementById("filtrarCompletadas")
const btnFiltroPrioridad = document.getElementById("filtrarPrioridad")
const btnFiltroDesfiltrar = document.getElementById("desFiltrar")
btnFiltroCompletada.addEventListener("click", (event) => {
    event.preventDefault()

    const valor = document.getElementById("completado").value
    filtrarTareas("estado", valor)
})
btnFiltroPrioridad.addEventListener("click", (event) => {
    event.preventDefault()

    const valor = document.getElementById("prioridadFiltrar").value
    filtrarTareas("prioridad", valor)
})
btnFiltroDesfiltrar.addEventListener("click", (event) => {
    event.preventDefault()

    filtrarTareas("desfiltrar", null)
})

const btnShowFullDel = document.getElementById("openClearAll")
btnShowFullDel.addEventListener("click", (event) => {
    document.getElementById("borrarTodo").classList.remove("disabled")

    document.getElementById("formAdd").classList.add("disabled")
    document.getElementById("formCompleted").classList.add("disabled")
    document.getElementById("formDelete").classList.add("disabled")
    document.getElementById("formFiltrar").classList.add("disabled")
})
const btnConfirmarBorrado = document.getElementById("confirmarBorrar")
const btnNegarBorrado = document.getElementById("negarBorrar")
btnConfirmarBorrado.addEventListener("click", (event) => {
    removeAllTask(true)
    LSManager.clearLocal()
})
btnNegarBorrado.addEventListener("click", (event) => {
    removeAllTask(false)
})