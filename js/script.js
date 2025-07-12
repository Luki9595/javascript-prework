
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
printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

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
    printMessage('Zagrałem ' + argComputerMove + ' a Ty zagrałeś ' + argPlayerMove + '!');
    
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
    else if (argComputerMove == 'Kamien' && argPlayerMove =='Papier'){
        winMessage = 'Wygrałeś';
    }
    else {
        winMessage = 'Co Ty za znaki gangów rzucasz tymi rencyma?';
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