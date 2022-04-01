/* alert("Hola mundo"); */

console.log("Este es otro mensaje");
let sw = true;
let clics = 0;

var nombre = "Johan Morales García";
let edad = 10;
//edad = "No quiero decirlo";
let titulo = document.getElementById('titulo');
let clic = document.getElementById('clic');

let mensaje = "Mi nombre es: "+nombre+" y mi edad es: "+(edad + 12);

console.log(mensaje);

titulo.innerHTML = mensaje;
clic.innerHTML = `Numero de clics = ${clics}`;
titulo.style.color = 'blue';
titulo.style.textTransform = "uppercase";

titulo.onclick = function(){
    if(sw){
        titulo.style.color = 'red';
        titulo.innerHTML = 'Ahora soy rojo xd';
        sw = false;
    } else{
        titulo.style.color = 'blue';
        titulo.innerHTML = 'Ahora soy azul xd';
        sw = true;
    }
    clics++;
    clic.innerHTML = `Numero de clics = ${clics}`;
};

