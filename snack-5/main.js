function stampaOgniSecondo(messaggio, intervallo) {
    return setInterval(() => {
        return console.log(messaggio);
        
    }, intervallo)
};

const intervalloId = stampaOgniSecondo("Ciao mamma sono su Boolean!", 1000);

setTimeout(() => {
    clearInterval(intervalloId);
}, 3000);