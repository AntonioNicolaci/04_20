const risposta = document.getElementById("div_risposta");

function palindromo(){
    const parola = document.getElementById("casella_testo").value.trim(); //rileva la parola e elimina gli spazi all'inio e alla fine per evitare errori dell'utente
    let ripeti, checks = 0;

    // controlla se la lunghezza della parola è pari o dispari; se la parola è pari allora modifica la variabile della lunghezza del ciclo con la metà della lunghezza della parola, altrimenti la lunghezza -1 per quelle dispasi visto che la lettera centrale non si ripeterà mai
    if(parola.length %= 2 == 0){ 
        ripeti = parola.length / 2;
    } else{
        ripeti = Math.floor(parola.length / 2);
    }

    // è un ciclo per controllare se la prima è l'ultima lettera sono uguali, ogni volta che il ciclo avanza passa alla lettera successiva o precedente; Se sono vere aumenta il valore di una variabile che serve più avanti
    for (let i = 0; ripeti > i; i++){
        if (parola[i] === (parola[parola.length - i - 1])){
            checks++;
        }
    }

    // se la variabile checks è uguale a ripeti vuol dire che è aumentata un numero di volte pari alla variabile ripeti nel ciclo 'for' sopra
    if (checks == ripeti){
        risposta.innerHTML = "Sì, è palindroma";
    } else {
        risposta.innerHTML = "No, non è palindroma";
    }
}