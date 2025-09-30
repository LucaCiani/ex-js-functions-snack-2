function creaContatoreAutomatico(intervallo) {
    let contatore = 0;
    return setInterval(() => {
        contatore++;
        return console.log(contatore);
    }, intervallo);
}

const intervalloId = creaContatoreAutomatico(1000);

setTimeout(() => {
    clearInterval(intervalloId);
}, 5000);
