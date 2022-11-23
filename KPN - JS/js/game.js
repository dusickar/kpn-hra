document.getElementById("playGame");
document.getElementById("nextGame");

    // USER skóre
    let scoreUser = 0;
    document.getElementById('userscore').innerHTML = scoreUser;
    
    // PC skóre
    let scorePc = 0;
    document.getElementById('pcscore').innerHTML = scorePc;



    // POČET VÝHIER  
    let countWin = 0;
    document.getElementById('wincount').innerHTML = countWin;

    // POČET PREHIER
    let countLosing = 0;
    document.getElementById('losingcount').innerHTML = countLosing;

    // POČET REMÍZ
    let countDraw = 0;
    document.getElementById('drawcount').innerHTML = countDraw;




function game() {
 
    alert('Hra začína! Zadaj hodnotu (k, p, n) a uvidíš či si vyhral!');
    
    
    
    //Voľba usera
    const oneCall = PcChoice();
    const userChoice = prompt('Tvoja voľba?');
    kpn = ['k',  'p',  'n'];
    console.log('User : ', userChoice);
    
    alert('Voľba PC : ' + oneCall);


   
    // Podmienky pre výhru
    if (userChoice === 'k' && oneCall === 'n') {
        console.log('Výhra user!')
        alert('Výhra');
        scoreUser ++;
        countWin++; // pripočítanie + 1 ku skóre
    } else if (userChoice === 'p' && oneCall === 'k') {
        console.log('Výhra user!')
        alert('Výhra');
        scoreUser ++;
        countWin++;
    } else if (userChoice === 'n' && oneCall === 'p') {
        console.log('Výhra user!')
        alert('Výhra');
        scoreUser ++;
        countWin++;
    };

    
    // Podmienky pre prehru
    if (userChoice === 'k' && oneCall === 'p') {
        console.log('Prehra user!')
        alert('Prehra!'); 
        scorePc++;
        countLosing++;
    } else if (userChoice === 'p' && oneCall === 'n') {
        console.log('Prehra user!')
        alert('Prehra!'); 
        scorePc++;
        countLosing++;
    } else if (userChoice === 'n' && oneCall === 'k') {
        console.log('Prehra user!')
        alert('Prehra!'); 
        scorePc++;
        countLosing++;
    };

   
    // Podmienky pre remízu
    if (userChoice === 'k' && oneCall === 'k') {
        console.log('Remíza!')
        alert('Remíza!');
        countDraw++;
    } else if (userChoice === 'p' && oneCall === 'p') {
        console.log('Remíza!')
        alert('Remíza!');
        countDraw++;
    } else if (userChoice === 'n' && oneCall === 'n') {
        console.log('Remíza!')
        alert('Remíza!');
        countDraw++;
    }; 


    // Vypísanie na obrazovku jednotlivých počítadiel
    document.getElementById('pcscore').innerHTML = scorePc;
    document.getElementById('losingcount').innerHTML = countLosing;
    document.getElementById('wincount').innerHTML = countWin;
    document.getElementById('userscore').innerHTML = scoreUser;
    document.getElementById('drawcount').innerHTML = countDraw;
};    
    
//Voľba PC
function PcChoice() {
    const length = 1; 
    // Declare all characters
    const chars = 'kpn';
    
    // Pick characters randomly
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log('PC : ' + str ) 
    
    return str;
} 



playGame.addEventListener('click', game);
nextGame.addEventListener('click', game);



