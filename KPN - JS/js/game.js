document.getElementById("playGame");
document.getElementById("nextGame");

function game() {
 
    alert('Hra začína! Zadaj hodnotu (k, p, n) a uvidíš či si vyhral!');
    
    
    
    //Voľba usera
    const oneCall = PcChoice();
    const userChoice = prompt('Tvoja voľba?');
    kpn = ['k',  'p',  'n'];
    console.log('User : ', userChoice);
    
    alert('Voľba PC : ' + oneCall);
    
    
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
    
    
    
    //POČÍTADLO BODOV USER/PC
    
    // USER
    let scoreUser = 0;
    document.getElementById('userscore').innerHTML = scoreUser;
    
    let countWin = 0;
    document.getElementById('wincount').innerHTML = countWin;
    
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
    
  
    //PC
    let scorePc = 0;
    document.getElementById('pcscore').innerHTML = scorePc;

    let countLosing = 0;
    document.getElementById('losingcount').innerHTML = countLosing;

    if (userChoice === 'k' && oneCall === 'p') {
        console.log('Prehra user!')
        alert('Prehra!'); 
        scorePc++;
    } else if (userChoice === 'p' && oneCall === 'n') {
        console.log('Prehra user!')
        alert('Prehra!'); 
        scorePc++;
    } else if (userChoice === 'n' && oneCall === 'k') {
        console.log('Prehra user!')
        alert('Prehra!'); 
        scorePc++;
    };


    let countDraw = 0;
    document.getElementById('drawcount').innerHTML = countDraw;

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


    document.getElementById('pcscore').innerHTML = scorePc;
    document.getElementById('losingcount').innerHTML = countLosing;
    document.getElementById('wincount').innerHTML = countWin;
    document.getElementById('userscore').innerHTML = scoreUser;
    document.getElementById('drawcount').innerHTML = countDraw;

}; 



playGame.addEventListener('click', game);
nextGame.addEventListener('click', game);



