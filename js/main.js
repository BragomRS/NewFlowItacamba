function limpiarChat(){

    document.getElementById("messages").innerHTML = "";

}


function mostrarChat(){

    document.getElementById("messages").style.display = "block";

    document.getElementById("flowView").style.display = "none";

}


function cargarFlujo(flujo){

    limpiarChat();

    mostrarChat();

    flujo();

}