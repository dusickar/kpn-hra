document.getElementById("playGame");
document.getElementById("nextGame");
document.getElementById("history");

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

    let score = []; 
    let round = [];
    let obj = {
        kamen: 0,
        papier: 0,
        noznice: 0
    };   
   


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
        countWin++;
        obj.kamen++;
        round++;
        score.push(round + '.kolo :' + ' Výhra user!'); // pripočítanie + 1 ku skóre
    } else if (userChoice === 'p' && oneCall === 'k') {
        console.log('Výhra user!')
        alert('Výhra');
        scoreUser ++;
        countWin++;
        obj.papier++;
        round++;
        score.push(round + '.kolo :' + ' Výhra user!'); // pripočítanie + 1 ku skóre
    } else if (userChoice === 'n' && oneCall === 'p') {
        console.log('Výhra user!')
        alert('Výhra');
        scoreUser ++;
        countWin++; 
        obj.noznice++;
        round++;
        score.push(round + '.kolo :' + ' Výhra user!'); // pripočítanie + 1 ku skóre
    };

    
    // Podmienky pre prehru
    if (userChoice === 'k' && oneCall === 'p') {
        console.log('Prehra user!')
        alert('Prehra!'); 
        scorePc++;
        countLosing++;
        obj.kamen++;
        round++;
        score.push(round + '.kolo :' + ' Prehra user!'); // pripočítanie + 1 ku skóre
    } else if (userChoice === 'p' && oneCall === 'n') {
        console.log('Prehra user!')
        alert('Prehra!'); 
        scorePc++;
        countLosing++;
        obj.papier++;
        round++;
        score.push(round + '.kolo :' + ' Prehra user!'); // pripočítanie + 1 ku skóre
    } else if (userChoice === 'n' && oneCall === 'k') {
        console.log('Prehra user!')
        alert('Prehra!'); 
        scorePc++;
        countLosing++;
        obj.noznice++;
        round++;
        score.push(round + '.kolo :' + ' Prehra user!'); // pripočítanie + 1 ku skóre
    };

   
    // Podmienky pre remízu
    if (userChoice === 'k' && oneCall === 'k') {
        console.log('Remíza!')
        alert('Remíza!');
        countDraw++;
        obj.kamen++;
        round++;
        score.push(round + '.kolo :' + ' Remíza!'); // pripočítanie + 1 ku skóre
    } else if (userChoice === 'p' && oneCall === 'p') {
        console.log('Remíza!')
        alert('Remíza!');
        countDraw++;
        obj.papier++;
        round++;
        score.push(round + '.kolo :' + ' Remíza!'); // pripočítanie + 1 ku skóre
    } else if (userChoice === 'n' && oneCall === 'n') {
        console.log('Remíza!')
        alert('Remíza!');
        countDraw++;
        obj.noznice++;
        round++;
        score.push(round + '.kolo :' + ' Remíza!'); // pripočítanie + 1 ku skóre
    }; 

    

    // Vypísanie na obrazovku jednotlivých počítadiel
    document.getElementById('pcscore').innerHTML = scorePc;
    document.getElementById('losingcount').innerHTML = countLosing;
    document.getElementById('wincount').innerHTML = countWin;
    document.getElementById('userscore').innerHTML = scoreUser;
    document.getElementById('drawcount').innerHTML = countDraw;
    document.getElementById('skore').innerHTML = score;

    document.getElementById('kamen').innerHTML =obj.kamen;
    document.getElementById('papier').innerHTML =obj.papier;
    document.getElementById('noznice').innerHTML =obj.noznice;


}; 


// HISTÓRIA
function history(skore, round, score) {
    history.addEventListener('click', history)

    const list = document.getElementById(skore),
			newItem = document.createElement('li');

		newItem.textContent = round;
		newItem.textContent = score;
		list.appendChild(newItem);
       
    console.log;
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




