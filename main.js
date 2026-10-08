let a = [3, 5, 10, 2, 8];

// Calcoliamo la somma dei numeri
let somma = 0;

a.forEach(function(numero) {
    somma += numero;
});

// Calcoliamo la media
let media = somma / a.length;

// Troviamo i valori minori della media
let valoriMinori = a.filter(function(numero) {
    return numero < media;
});

// Troviamo i valori maggiori della media
let valoriMaggiori = a.filter(function(numero) {
    return numero > media;
});

// Stampiamo i risultati nella console
console.log("Media:", media);
console.log("Valori minori della media:", valoriMinori);
console.log("Quantità di valori minori:", valoriMinori.length);
console.log("Quantità di valori maggiori:", valoriMaggiori.length);

// Mostriamo i risultati nella pagina
document.getElementById("media").textContent =
    "Media: " + media;

document.getElementById("valori-minori").textContent =
    "Valori minori della media: [" + valoriMinori.join(", ") + "]";

document.getElementById("quantita-minori").textContent =
    "Quantità di valori minori: " + valoriMinori.length;

document.getElementById("quantita-maggiori").textContent =
    "Quantità di valori maggiori: " + valoriMaggiori.length;