//Carga la lista de tareas del localStorage utilizando JSON 
let listaTareas = JSON.parse(localStorage.getItem('tareas')) || [];

document.getElementById('agregarBtn').addEventListener('click', agregarTarea);
document.getElementById('borrarBtn').addEventListener('click', borrarTarea);

// lo llame primero y asi me carga lo que se guardo, me anduvo asi y no lo toque JAJA
mostrarTareas();

function agregarTarea() {
    let nuevaTarea = document.getElementById('nuevaTarea').value;
    if (nuevaTarea) {
        listaTareas.push(nuevaTarea); 
        // Guarda en localStorage
        localStorage.setItem('tareas', JSON.stringify(listaTareas));
        document.getElementById('nuevaTarea').value = ''; 
        mostrarTareas();
        console.log("Tarea agregada: " + nuevaTarea);
    } else {
        alert("Por favor, ingrese una tarea.");
    }
}

function mostrarTareas() {
    const listaElement = document.getElementById('listaTareas');
    listaElement.innerHTML = ''; // Limpia la lista antes de mostrarla
    if (listaTareas.length === 0) {
        listaElement.innerHTML = '<li>No hay tareas en la lista.</li>';
    } else {
        listaTareas.forEach((tarea, i) => {
            listaElement.innerHTML += `<li>${i + 1}. ${tarea}</li>`;
        });
    }
}

function borrarTarea() {
    let indiceTarea = parseInt(document.getElementById('indiceTarea').value);
    if (!isNaN(indiceTarea) && indiceTarea > 0 && indiceTarea <= listaTareas.length) {
        let tareaEliminada = listaTareas.splice(indiceTarea - 1, 1);
        localStorage.setItem('tareas', JSON.stringify(listaTareas)); // Actualiza localStorage
        document.getElementById('indiceTarea').value = ''; 

        mostrarTareas();
        console.log("Tarea eliminada: " + tareaEliminada);
    } else {
        alert("numero de lista incorrecto, elija un número de tarea correcto.");
    }
}
