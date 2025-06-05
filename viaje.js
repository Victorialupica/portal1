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

function precio (){
    let r = document.getElementById("resultado").textContent="El costo del viaje seria 300$";
}