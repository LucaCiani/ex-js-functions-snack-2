function stampaOgniSecondo(messaggio, intervallo) {
    const intervalloId = setInterval(() => {
        return console.log(messaggio);
    }, intervallo);

    setTimeout(() => {
        clearInterval(intervalloId);
    }, 3000);
}

stampaOgniSecondo("Ciao mamma sono su Boolean!", 1000);
