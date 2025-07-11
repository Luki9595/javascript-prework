let playerInput;

function playGame(playerInput){

    clearMessages()

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'Kamien';
    } 
    else if(argMoveId == 2){
        return 'Papier'
    } 
    else if(argMoveId == 3){
        return 'Nozyce'
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
    }

    let argComputerMove = getMoveName(randomNumber);

    /*
    if(randomNumber == 1){
        computerMove = 'Papier';
    }
    else if(randomNumber == 2){
        computerMove = 'Kamien';
    }
    else {
        computerMove = 'Nozyce';
    }
    */

   // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    // console.log('Gracz wpisał: ' + playerInput);

    let argPlayerMove = getMoveName(playerInput);

    /*
    if(playerInput == 1){
        playerMove = 'Papier';
    }
    else if(playerInput == 2){
        playerMove = 'Kamien';
    }
    else {
        playerMove = 'Nozyce';
    }
    */


    function displayResult(argComputerMove, argPlayerMove){
        let winMessage;
        printMessage('Zagrałem ' + argComputerMove + ' a Ty zagrałeś ' + argPlayerMove + '!');
        
        if((argComputerMove == 'Papier' && argPlayerMove == 'Kamien') || (argComputerMove == 'Nozyce' && argPlayerMove == 'Papier') || (argComputerMove == 'Kamien' && argPlayerMove == 'Nozyce')){
            winMessage = 'Wygrałem';
        }
        else if (argComputerMove == argPlayerMove){
            winMessage = 'Remis';
        }
        else {
            winMessage = 'Wygrałeś';
        }
        return winMessage;
    }

    printMessage(displayResult(argComputerMove, argPlayerMove));
    /*
    printMessage('Twój ruch to: ' + argPlayerMove);

    let winMessage = 'nieznany wynik';

    if(argComputerMove == 'Papier' && argPlayerMove == 'Kamien'){
        winMessage = 'Wygrałem';
    }
    else if(argComputerMove == 'Papier' && argPlayerMove == 'Nozyce'){
        winMessage = 'Wygrałeś';
    }
    else if(argComputerMove == 'Papier' && argPlayerMove == 'Papier'){
        winMessage = 'Remis';
    }
    else if(argComputerMove == 'Nozyce' && argPlayerMove == 'Papier'){
        winMessage = 'Wygrałem';
    }
    else if(argComputerMove == 'Nozyce' && argPlayerMove == 'Kamien'){
        winMessage = 'Wygrałeś';
    }
    else if(argComputerMove == 'Nozyce' && argPlayerMove == 'Nozyce'){
        winMessage = 'Remis';
    }
    else if(argComputerMove == 'Kamien' && argPlayerMove == 'Kamien'){
        winMessage = 'Remis';
    }
    else if(argComputerMove == 'Kamien' && argPlayerMove == 'Nozyce'){
        winMessage = 'Wygrałem';
    }
    else {
        winMessage = 'Wygrałeś';
    }

    printMessage(winMessage);
    */
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
    }
);
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
    }
);
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
    }
);