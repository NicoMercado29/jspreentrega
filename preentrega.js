let nombrejugador = prompt("Hola Bienvenido a nuestro juego trivia Simpsons , Escribi tu nombre")

alert("Bienvenido "+nombrejugador+ " ¿Listo para jugar? Seleccionando A,B o C")


const preguntas= new Array();
    
const respuesta= new Array();

preguntas[0]= new Array();

preguntas[0][0]= prompt("¿Cuántos hijos tienen Apu y Manjula? \n A: 6 hijos \n B: 7 hijos \n C: 8 hijos");
preguntas[0][1]="6 hijos";
preguntas[0][2]="7 hijos";
preguntas[0][3]="8 hijos";

respuesta[3]=preguntas[0][0];

if(respuesta[3]=="c") {
  alert("UHU");
}else {
  alert("D'HO");
}

const nuevapregunta= new Array();
    
const nuevarespuesta=new Array();

preguntas[0]=new Array();

preguntas[0][0]= prompt("¿Cual es el nombre completo de Homero? \n a: Homero Jay.S  \n b: Homero Javier.S  \n c:Homero Jorge.S");
preguntas[0][1]="Homero Jay.S";
preguntas[0][2]="Homero Javier.S";
preguntas[0][3]="Homero Jorge.S";

respuesta[1]= preguntas[0][0];

if(respuesta[1]=="a") {
  alert("UHU");
}else {
  alert("D'HO");
}


alert("Gracias por jugar esta trivia");