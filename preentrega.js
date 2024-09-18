listaTareas = [];

function agregarTarea(){
    let nuevaTarea = prompt("Ingrese una nueva tarea: "); 
    
    listaTareas.push(nuevaTarea); 
    
    console.log("Tarea agregada: " + nuevaTarea); 
    
}
function mostrarTareas(){
    console.log("Listas de tareas:"); //muestra este mensaje 
    for(let i = 0; i < listaTareas.length; i++){ //Utilizamos un for para recorrer el array por completo
        console.log(i + 1 + ". " + listaTareas[i]); //Se imprime tarea por tarea
    }
}
function borrarTarea(){
    let indiceTarea = parseInt(prompt("Ingrese el número de la tarea que desea eliminar")); //Guardamos la tarea que vamos a borrar
    listaTareas.splice(indiceTarea-1, 1); //Eliminamos la tarea indicada
    console.log("Tarea eliminada");
    console.log(listaTareas); //muestra la lista final
}function principal(){
    let opcion; //Variable que almacena la opción seleccionada del menú
    do {
        console.log("Seleccione una opción:"); //Se muestran las opciones del menú
        console.log("1. Agregar tarea");
        console.log("2. Mostrar tarea");
        console.log("3. Borrar tarea");
        console.log("0. Salir");

        opcion = parseInt(prompt("Bienvenido al menú principal, por favor ingrese el número de la opción que desea ejecutar:")); 
        switch (opcion) { 
          
            case1:
                agregarTarea();
                break;
            
            case2:
                mostrarTareas();
                break;

            case3:
                borrarTarea();
                break;

            case0:
                console.log("Saliendo del programa...");
                break;

            default:
                console.log("Opción no válida. Por favor, elige de nuevo.");
                break;
        }
    } while(opcion !== 0);
}

principal(); //Inicia el programa