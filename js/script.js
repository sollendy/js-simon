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
let randomNumbers = Array.from({length: 5}, () => Math.floor(Math.random() * 100) + 1);;

//in pagina spunteranno i numeri
numContEl.innerHTML = `<b>${randomNumbers}</b>`;
//console.log(randomNumbers);

//dopo i numeri creo la funzione che genera i timer
setTimeout (svanire, 10000);
setTimeout (risposta, 10500);

function svanire() {
    numContEl.style.display = "none";
    //let userNumbers = [prompt('quali erano i numeri?')];
    //console.log(userNumbers);
}

function risposta() {
    let userNumbers = [];
    for (let i = 0; i <= 4; i++) {
        userNumbers.push(prompt('quali erano i numeri?'));
    }
    //console.log(userNumbers);
    if (randomNumbers.includes(userNumbers[i])) {
        numContEl.innerHTML = `hai indovinato tot numeri`;
    }
}
