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
setTimeout (svanire, 4000);
setTimeout (domanda, 4500);

function svanire() {
    numContEl.innerHTML = `è il tuo turno!`;
    //let userNumbers = [prompt('quali erano i numeri?')];
    //conso1le.log(userNumbers);
}

function domanda() {
    
    for (let i = 0; i <= 4; i++) {
        userNumbers.push(prompt('quali erano i numeri?'));
    }
    console.log(userNumbers);
    verifica();
}

function verifica () {

    let numeriGiusti = [];
    for (let i = 0; i <= 4; i++) {
        if (randomNumbers[i] == userNumbers[i]) {
            numeriGiusti.push(randomNumbers[i]);
            //numContEl.append(``);
        }
    }
    console.log(numeriGiusti);
    numContEl.innerHTML = `Numeri dati: <b>${randomNumbers}</b><br>numeri indovinati: <b>${numeriGiusti.length}</b><br> i numeri sono: <b>${numeriGiusti}</b>`;
}

