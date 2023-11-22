var sueldo = 0;
var adelantos = 0;
var descuentos = [];

function mostrarIngresoAdelantos() {
    document.getElementById("adelantosSection").style.display = "block";
}

function ingresarAdelanto() {
    var adelanto = parseFloat(document.getElementById("adelanto").value);
    adelantos += adelanto;
    document.getElementById("adelantosList").innerHTML += "<li>Adelanto: Q" + adelanto + "</li>";
    document.getElementById("adelanto").value = "";
}

function calcularDescuento(descuento) {
    var cantidad;
    if (descuento === -1) {
        cantidad = parseFloat(prompt("Ingrese el valor del descuento"));
    } else {
        cantidad = parseInt(prompt("¿Cuántos desea descontar?"));
    }

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingrese una cantidad válida para el descuento.");
        return;
    }

    var resultado;
    if (descuento === -1) {
        resultado = "El descuento ingresado es: Q" + cantidad;
        descuentos.push(cantidad);
    } else {
        resultado = "El descuento para " + cantidad + " platos/gaseosas es: Q" + (descuento * cantidad);
        descuentos.push(descuento * cantidad);
    }

    actualizarDescuentosList();
    document.getElementById("descuentosResult").textContent = resultado;
}

function ingresarOtroDescuento() {
    var descuentoPersonalizado = parseFloat(prompt("Ingrese el monto del descuento"));
    
    if (!isNaN(descuentoPersonalizado) && descuentoPersonalizado > 0) {
        descuentos.push(descuentoPersonalizado);
        actualizarDescuentosList();
    } else {
        alert("Ingrese un valor numérico válido y mayor que cero.");
    }
}

function actualizarDescuentosList() {
    var descuentosList = document.getElementById("descuentosList");
    descuentosList.innerHTML = "";

    for (var i = 0; i < descuentos.length; i++) {
        var li = document.createElement("li");
        li.textContent = "Descuento: Q" + descuentos[i];
        descuentosList.appendChild(li);
    }
}

function calcularSueldo() {
    sueldo = parseFloat(document.getElementById("sueldo").value);
    var sueldoFinal = sueldo - adelantos - sumarDescuentos();
    document.getElementById("sueldoFinal").textContent = sueldoFinal;
    document.getElementById("resultado").style.display = "block";
}

function borrarElementos() {
    sueldo = 0;
    adelantos = 0;
    descuentos = [];
    
    document.getElementById("sueldo").value = "";
    document.getElementById("adelantosList").innerHTML = "";
    document.getElementById("adelanto").value = "";
    document.getElementById("descuentosList").innerHTML = "";
    document.getElementById("descuentosResult").textContent = "";
    document.getElementById("sueldoFinal").textContent = "";
    document.getElementById("resultado").style.display = "none";
}

function sumarDescuentos() {
    var totalDescuentos = 0;
    for (var i = 0; i < descuentos.length; i++) {
        totalDescuentos += descuentos[i];
    }
    return totalDescuentos;
}
