var numberToFind = parseInt(Math.random() * 100);
var attemps = 0;

function verifyNumber() {
    var bet = document.getElementById("bet").value;
    console.log(numberToFind);

    if (bet > 100 || bet < 1){
        alert('Resposta inválida.')
        return;
    } 

    if (bet > numberToFind) {
        attemps++;
        alert('Quase lá! O número que queres achar é menor.')
    } else if (bet < numberToFind) {
        attemps++;
        alert('Quase lá! O número que queres achar é maior.')
    } 
    
    if (bet == numberToFind) {
        alert('Parábens! Você acertou o número com' +attemps+ 'erros.')
        numberToFind = parseInt(Math.random() * 100);
    }
}

function GenerateNumber() {
    location.reload()
}