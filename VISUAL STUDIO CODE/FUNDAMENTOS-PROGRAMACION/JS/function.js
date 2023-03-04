/**
document.getElementById("boton").onclick=function(){
    console.log("Capturamos el evento click.")
    document.getElementById("demo").innerHTML="Estamos probando nuestro primer evento en JS";

}
 

COMENTARIO -> Esto es (addEventListener) para hacer determinada cosa cuando se hace click en cualquier parte de la pag
COMENTARIO -> y hace determinado evento o accion.
document.addEventListener ('click', function(){
    console.log("Hola mundo desde eventListener");
    document.getElementById("demo").innerHTML="Estamos probando nuestro primer evento en JS";
});

*/


document.getElementById('boton').addEventListener('click', function(){
    console.log("Hola mundo desde eventListener");
    document.getElementById("demo").innerHTML="Estamos probando nuestro primer evento en JS";
});

document.getElementById('boton_color').addEventListener('click', function(){
    document.body.style.backgroundColor = '#ff0000';
});

document.getElementById('boton_Default').addEventListener('click', function(){
    document.body.style.backgroundColor = '#808080';
});

document.getElementById('boton_ocultar').addEventListener('click', function(){
    document.getElementById('demo').style.display='none';
});

const collection = document.getElementsByClassName("prueba");
for(let i=0;i< collection.length;i++){
    collection[i].style.backgroundColor="green";
}