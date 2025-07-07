
let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = 'Nieznany ruch'

if(randomNumber == 1){
    computerMove = 'Papier';
}
else if(randomNumber == 2){
    computerMove = 'Kamien';
}
else {
    computerMove = 'Nozyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'Nieznany ruch';

if(playerInput == 1){
    playerMove = 'Papier';
}
else if(playerInput == 2){
    playerMove = 'Kamien';
}
else {
    playerMove = 'Nozyce';
}

printMessage('Twój ruch to: ' + playerMove);

let winMessage = 'nieznany wynik';

if(computerMove == 'Papier' && playerMove == 'Kamien'){
    winMessage = 'Wygrałem';
}
else if(computerMove == 'Papier' && playerMove == 'Nozyce'){
    winMessage = 'Wygrałeś';
}
else if(computerMove == 'Papier' && playerMove == 'Papier'){
    winMessage = 'Remis';
}
else if(computerMove == 'Nozyce' && playerMove == 'Papier'){
    winMessage = 'Wygrałem';
}
else if(computerMove == 'Nozyce' && playerMove == 'Kamien'){
    winMessage = 'Wygrałeś';
}
else if(computerMove == 'Nozyce' && playerMove == 'Nozyce'){
    winMessage = 'Remis';
}
else if(computerMove == 'Kamien' && playerMove == 'Kamien'){
    winMessage = 'Remis';
}
else if(computerMove == 'Kamien' && playerMove == 'Nozyce'){
    winMessage = 'Wygrałem';
}
else {
    winMessage = 'Wygrałeś';
}

printMessage(winMessage);




