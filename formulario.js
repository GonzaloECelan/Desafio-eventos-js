

let nombre_usuario = document.getElementById("nombre_u");
let apellido_usuario = document.getElementById("apellido_u");
let edad_usuario = document.getElementById("edad_u");




nombre_usuario.addEventListener("change", function(e){

    console.log(e.target.value);

    if( e.target.value == "Gonzalo"){
        let contenedor = document.getElementById("contenedor");
        let mensaje = document.createElement("p");
        mensaje.innerText = "¡Usuario incorrecto!";
        mensaje.style.color = "red";
        mensaje.style.fontSize = "10px";
        mensaje.style.fontFamily = "Verdana";
        contenedor.append(mensaje)
    }
    else{
        let contenedor = document.getElementById("contenedor");
        let mensaje = document.createElement("p");
        mensaje.innerText = "¡Usuario correcto!";
        mensaje.style.color = "green";
        mensaje.style.fontSize = "10px";
        contenedor.append(mensaje)
    }
})

apellido_usuario.addEventListener("change", function(e){

    console.log(e.target.value);

    if( e.target.value == "Lopez"){
        let contenedor = document.getElementById("contenedor-dos");
        let mensaje = document.createElement("p");
        mensaje.innerText = "¡Apellido incorrecto!";
        mensaje.style.color = "red";
        mensaje.style.fontSize = "10px";
        mensaje.style.fontFamily = "Verdana";
        contenedor.append(mensaje)
    }
    else{
        let contenedor = document.getElementById("contenedor-dos");
        let mensaje = document.createElement("p");
        mensaje.innerText = "¡Apellido correcto!";
        mensaje.style.color = "green";
        mensaje.style.fontSize = "10px";
        contenedor.append(mensaje)
    }
})

edad_usuario.addEventListener("change", function(e){

    console.log(e.target.value);

    if( e.target.value < 18 ){
        let contenedor = document.getElementById("contenedor-tres");
        let mensaje = document.createElement("p");
        mensaje.innerText = "¡Usted es menor de edad!";
        mensaje.style.color = "red";
        mensaje.style.fontSize = "10px";
        mensaje.style.fontFamily = "Verdana";
        contenedor.append(mensaje)
    }
    else{
        let contenedor = document.getElementById("contenedor-tres");
        let mensaje = document.createElement("p");
        mensaje.innerText = "¡Usted es mayor de edad!";
        mensaje.style.color = "green";
        mensaje.style.fontSize = "10px";
        contenedor.append(mensaje)
    }
})

formulario.addEventListener("submit" , function(e){


    e.preventDefault();
    let nombre = document.getElementById("nombre_u");
    let apellido = document.getElementById("apellido_u");
    let edad = document.getElementById("edad_u");

    console.log("El nombre de usuario es:" , nombre_u.value);
    console.log("El apellido del usuario es:" , apellido_u.value);
    console.log("La edad del usuario es:" , edad_u.value);

})