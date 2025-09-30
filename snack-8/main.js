function eseguiEferma(messaggio, contatore, intervallo, durata) {
    console.log(`${messaggio} ${contatore}`);

    const intervalloId = setInterval(() => {
        contatore--;
        console.log(contatore);
    }, intervallo);

    setTimeout(() => {
        clearInterval(intervalloId);
        console.log("Tempo scaduto!");
    }, durata);
}

eseguiEferma(`Inizio a contare:`, 10, 1000, 9999);
