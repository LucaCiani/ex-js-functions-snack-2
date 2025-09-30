function creaTimer(timer) {
    console.log("Inizio timer!");
    
    return setTimeout(() => {
        return console.log("Tempo scaduto!");
    }, timer);
};

creaTimer(2000);