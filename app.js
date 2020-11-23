//MODO 1

let contatore = 0;
let span = document.querySelector("#contatore > span")

function aggiornaPagina() {
    span.innerHTML = contatore.toString()
}

function gestioneBottone() {
    contatore = contatore + 1;
    //console.log(contatore);
    aggiornaPagina()

    // Vai a prendere l'ID contatore
    //let span = document.querySelector("#contatore > span")

    //Scrivici all'interno il valore del contatore
    //h1.innerHTML = "Contatore : " + contatore.toString()
    //h1.innerHTML = `Contatore : ${contatore}`
    //span.innerHTML = contatore.toString
}

function gestioneReset() {
    contatore = 0
    aggiornaPagina()
}

function tornaIndietro() {
    if (contatore > 0) {
        contatore = contatore - 1
        aggiornaPagina()
    }
}
/*//MODO 2
const gestioneBottone2 = () = {
    alert("Ciao mondo 😂😂😂😂!")
}*/