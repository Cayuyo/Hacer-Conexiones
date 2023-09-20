function solicitudes(elemento, opcion) {

    const contenedor = elemento.closest('.card-list-item');
    contenedor.remove();
    console.log(contenedor);
    
    document.querySelectorAll(".badge")[0].innerText--;
    /*let numeroConexionesRequest = document.querySelector(".badge").innerText;
    numeroConexionesRequest--;
    document.querySelector(".badge").innerText = numeroConexionesRequest;*/

    switch (opcion) {
        case 'aceptar':
            document.querySelectorAll(".badge")[1].innerText++;
            console.log('se acepto la solicitud');
            break;
    
        case 'rechazar':
            console.log('se rechazo la solicitud');
            break;
    }
}

function cambiarNombre() {
    let nombres = ["Sara Rojas","Haylinn Orellana","Miriam Fuenzalida","Fresia Rojas","Paulina Fuenzalida","Francisca Basso","Teresa Venegas","Luz Ortega","Juanita Toro"];

    let eleccion = nombres[Math.floor(nombres.length * Math.random())];
    //console.log(eleccion);

    const cambio = document.querySelector("#userName");

    cambio.innerText = eleccion;
    //console.log(cambio);
}