"use strict"

import { addTask, completedTask, filtrarTareas, menuOpen, removeAllTask, removeTask } from "./actions/commands.js"
import { LSManager } from "./actions/localStorageManager.js"

LSManager.loadLocal()

const btnShowAdd = document.getElementById("openAdd")
btnShowAdd.addEventListener("click", (event) => {
    menuOpen("Añadir")
})
const btnAddTask = document.getElementById("addTask")
btnAddTask.addEventListener("click", (event) => {
    event.preventDefault()

    addTask()

    LSManager.saveToLocal()
})

const btnShowCompleted = document.getElementById("openComplete")
btnShowCompleted.addEventListener("click", (event) => {
    menuOpen("Completar")
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
    menuOpen("Borrar")
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
    menuOpen("Filtrar")
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
    menuOpen("BorrarTodo")
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