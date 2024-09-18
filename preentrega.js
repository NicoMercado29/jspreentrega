let listaTareas = [];

function agregarTarea() {
    let nuevaTarea = prompt("Ingrese una nueva tarea: ");
    listaTareas.push(nuevaTarea);
    console.log("Tarea agregada: " + nuevaTarea);
}

function mostrarTareas() {
    console.log("Listas de tareas:");
    for (let i = 0; i < listaTareas.length; i++) {
        console.log(i + 1 + ". " + listaTareas[i]);
    }
}

function borrarTarea() {
    let indiceTarea = parseInt(prompt("Ingrese el número de la tarea que desea eliminar"));
    if (indiceTarea > 0 && indiceTarea <= listaTareas.length) {
        listaTareas.splice(indiceTarea - 1, 1);
        console.log("Tarea eliminada");
    } else {
        console.log("Índice no válido.");
    }
    console.log(listaTareas);
}

function principal() {
    let opcion;
    do {
        console.log("Seleccione una opción:");
        console.log("1. Agregar tarea");
        console.log("2. Mostrar tareas");
        console.log("3. Borrar tarea");
        console.log("0. Salir");

        opcion = parseInt(prompt("Bienvenido al menú principal, por favor ingrese el número de la opción que desea ejecutar:"));
        switch (opcion) {
            case 1:
                agregarTarea();
                break;

            case 2:
                mostrarTareas();
                break;

            case 3:
                borrarTarea();
                break;

            case 0:
                console.log("Saliendo del programa...");
                break;

            default:
                console.log("Opción no válida. Por favor, elige de nuevo.");
                break;
        }
    } while (opcion !== 0);
}

principal();