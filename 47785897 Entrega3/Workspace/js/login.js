//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

//document.addEventListener("DOMContentLoaded", function(e){

function verificacion(){
    let dato = document.getElementById('usuario');
    let pass = document.getElementById('contraseña');
    let usuario = {};
    if(dato.value.trim() === '' || pass.value.trim() === ''){
        alert ("Falta completar un campo");
    }
    else{
        location.href = "index.html";
        usuario.nombre = dato.value;
        usuario.contraseña = pass.value;
        usuario.estado = "conectado";

        localStorage.setItem('usuario' , JSON.stringify(usuario));
        sessionStorage.setItem('usuario' , JSON.stringify(usuario));
    }
}


function desconectar(){
    let usuario = localStorage.getItem('usuario');
    localStorage.clear();
    usuario.estado = "desconectado";
    
    signOut();

    location.href = "login.html";

}
