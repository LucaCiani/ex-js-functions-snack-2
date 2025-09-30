const pincoPallo = (pinco, pallo) => pinco + pallo;

const eseguiOperazione = (num1, num2, callBack) => console.log(callBack(num1, num2));

eseguiOperazione(2, 3, pincoPallo);