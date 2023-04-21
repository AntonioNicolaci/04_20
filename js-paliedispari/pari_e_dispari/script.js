const risposta = document.getElementById("risposta");

function pariDispari(){
    const somma = parseInt(document.getElementById("numero").value) + getRndInteger(1, 5);
    const pariDispari = document.getElementById("pari_dispari").value.toLowerCase();
    let stringaAppoggio = "";
    
    stringaAppoggio = stampoRisultati(stringaAppoggio, `La somma è ${somma}`);


    if (pariDispari == controlloPariDispari(somma)){
        stringaAppoggio = stampoRisultati(stringaAppoggio, `Hai Vinto`);
    } else if(pariDispari != controlloPariDispari(somma)){
        stringaAppoggio = stampoRisultati(stringaAppoggio, `Hai Perso`);
    }
    risposta.innerHTML = stringaAppoggio;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function controlloPariDispari(somma){
    if (somma % 2 == 0) {
        return "pari";
    } else{
        return "dispari";
    }
}

function stampoRisultati(stringaAppoggio, cosaScrivere){
    return stringaAppoggio += `<span>${cosaScrivere}</span>`;
}