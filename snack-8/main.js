let contatore = 10;

function eseguiEferma(messaggio, intervallo, durata) {
    console.log(messaggio);

    const intervalloId = setInterval(() => {
        contatore--;
        console.log(contatore);
    }, intervallo);

    setTimeout(() => {
        clearInterval(intervalloId);
        console.log("Tempo scaduto!");
    }, durata);
}

eseguiEferma(`Inizio a contare da ${contatore}`, 1000, 9999);
