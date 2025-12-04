console.log("Inizio esecuzione");
let = new Date();
console.log(d);
document.getElementById("saluto").innerHTML = d.getDay();

function elabora() {
    let numero = document.getElementById("inNumber").value;
    alert(numero);

    if (numero => 0 && numero <= 255) {
        document.getElementById("outText").innerHTML = "Hai inserito il numero" + numero;
    } else {
        document.getElementById("error").innerHTML = "Il numero non è corretto";
    }
}

function reset() {
    document.getElementById("inNumber").value = "";
}
