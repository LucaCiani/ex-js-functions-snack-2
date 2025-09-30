function creaContatoreAutomatico(intervallo) {
    let contatore = 0;

    const intervalloId = setInterval(() => {
        contatore++;
        return console.log(contatore);
    }, intervallo);

    setTimeout(() => {
        clearInterval(intervalloId);
    }, 5000);
}

creaContatoreAutomatico(1000);
