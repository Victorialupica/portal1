function validar(){
    let nombre=document.getElementById("Usuario").value;
    let password=document.getElementById("Contraseña").value;

    if (nombre=="victoria" && password=="123"){
        window.location.href="viaje.html";
    }else{
        alert ("El usuario o contraseña es incorrecto")
    }
}

function afiliar() {
    document.getElementById("Nombre").value = "";
    document.getElementById("Apellido").value = "";
    document.getElementById("DNI").value = "";
    document.getElementById("pago").value = "";
    let r = document.getElementById("resultado1").textContent="USUARIO AFILIADO";
 
}

function cotizar (){

    let lug = document.getElementById("lugar").value;
    let  amb = document.getElementById("ambiente").value;

    if (lug==1 && amb==1){
        window.location.href="opcion1.html";
    }
    if (lug==1 && amb==2){
        window.location.href="opcion2.html";
    }
    if (lug==1 && amb==3){
        window.location.href="opcion3.html";
    }
    if (lug==2 && amb==1){
        window.location.href="opcion4.html";
    }
    if (lug==2 && amb==2){
        window.location.href="opcion5.html";
    }
    if (lug==2 && amb==3){
        window.location.href="opcion6.html";
    }
}
function lasgrutas(){
let r = document.getElementById("resultado").textContent="El precio aproximado con todo incluido es: $500.000 por persona ";
}
function mardelplata(){
let r = document.getElementById("resultado1").textContent="El precio aproximado con todo incluido es: $6000.000 por persona ";
}
function villagesell(){
let r = document.getElementById("resultado2").textContent="El precio aproximado con todo incluido es: $700.000 por persona ";
}
function bariloche(){
    let r = document.getElementById("resultado").textContent="El precio aproximado con todo incluido es: $900.000 por persona ";
}
function tafi(){
let r = document.getElementById("resultado1").textContent="El precio aproximado con todo incluido es: $7000.000 por persona ";
}
function ushuaia(){
let r = document.getElementById("resultado2").textContent="El precio aproximado con todo incluido es: $1.500.000 por persona ";
}
function buenosaires(){
    let r = document.getElementById("resultado").textContent="El precio aproximado con todo incluido es: $800.000 por persona ";
}
function cordoba(){
let r = document.getElementById("resultado1").textContent="El precio aproximado con todo incluido es: $700.000 por persona ";
}
function mendoza(){
let r = document.getElementById("resultado2").textContent="El precio aproximado con todo incluido es: $600.000 por persona ";
}
function cancun(){
    let r = document.getElementById("resultado").textContent="El precio aproximado con todo incluido es: $2.500.000 por persona ";
}
function florianopolis(){
let r = document.getElementById("resultado1").textContent="El precio aproximado con todo incluido es: $1.500.000 por persona ";
}
function puntadeleste(){
let r = document.getElementById("resultado2").textContent="El precio aproximado con todo incluido es: $1.000.000 por persona ";
}
function cajon(){
    let r = document.getElementById("resultado").textContent="El precio aproximado con todo incluido es: $1.000.000 por persona ";
}
function cañon(){
let r = document.getElementById("resultado1").textContent="El precio aproximado con todo incluido es: $1.000.000 por persona ";
}
function losalpes(){
let r = document.getElementById("resultado2").textContent="El precio aproximado con todo incluido es: $4.200.000 por persona ";
}
function roma(){
    let r = document.getElementById("resultado").textContent="El precio aproximado con todo incluido es: $3.000.000 por persona ";
}
function estambul(){
let r = document.getElementById("resultado1").textContent="El precio aproximado con todo incluido es: $2.500.000 por persona ";
}
function quito(){
let r = document.getElementById("resultado2").textContent="El precio aproximado con todo incluido es: $2.000.000 por persona ";
}