//creo le variabili corrispondenti agli elementi html
//creo l'array del gruppo di numeri
//faccio spuntare l'array in pagina
//creo la funzione che fa sì che vengano generati i numeri
//dopo i numeri creo la funzione che genera il timer
//assieme ai numeri genero un conto fino a 10 secondi alla fine del quale i numeri riportati spariranno
//creo un prompt che chiede all'utente quali delle 5 cifre si ricorda
//-->SE l'utente indovina anche solo una cifra gli riporto quale di esse sia
//-->ALTRIMENTI gli dico che ha perso


//creo le variabili corrispondenti agli elementi html
const numGenEl = document.getElementById('generatore');
const numContEl = document.getElementById("numeri");
//creo la variabile dell'array di numeri
// let contatore = 0;
let randomNumbers = Array.from({length: 5}, () => Math.floor(Math.random() * 20) + 1);;
let userNumbers = [];

//in pagina spunteranno i numeri
numContEl.innerHTML = `<b>${randomNumbers}</b>`;
//console.log(randomNumbers);

//dopo i numeri creo la funzione che genera i timer
setTimeout (svanire, 10000);
setTimeout (domanda, 10500);
setTimeout (verifica(userNumbers), 11000);

function svanire() {
    numContEl.innerHTML = `è il tuo turno!`;
    //let userNumbers = [prompt('quali erano i numeri?')];
    //conso1le.log(userNumbers);
}

function domanda() {
    
    for (let i = 0; i < randomNumbers.length; i++) {
        userNumbers.push(prompt('quali erano i numeri?'));
    }
}

function verifica () {

    let numeriGiusti = [];
    for (let i = 0; i < 6; i++) {
        if (randomNumbers[i] == userNumbers[i]) {
            numeriGiusti.push(randomNumbers[i]);
            console.log(numeriGiusti);
            //numContEl.append(``);
        }

    }

}

