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
    
    
    
    //Výsledok hry
    scoreUser = 0;
    // scoreUser = scoreUser.textContent;
    // scoreUser = Number(scoreUser + 1);
    // scoreUser = scoreUser.textContent;
    
    if (userChoice === 'k' && oneCall === 'n') {
        console.log('Výhra user!')
        alert('Výhra');
        scoreUser++;
    } else if (userChoice === 'p' && oneCall === 'k') {
        console.log('Výhra user!')
        alert('Výhra');
        scoreUser++;
    } else if (userChoice === 'n' && oneCall === 'p') {
        console.log('Výhra user!')
        alert('Výhra');
        scoreUser++;
    };
    
    
    
    // KAMEŇ
    if (userChoice === 'k' && oneCall === 'k') {
        console.log('Remíza!')
        alert('Remíza!');
    // } else if (userChoice === 'k' && oneCall === 'n') {
    //     console.log('Výhra user!')
    //     alert('Výhra');
    } else if (userChoice === 'k' && oneCall === 'p') {
        console.log('Prehra user!')
        alert('Prehra!'); 
    };

    //PAPIER
    if (userChoice === 'p' && oneCall === 'p') {
        console.log('Remíza!')
        alert('Remíza!');
        // } else if (userChoice === 'p' && oneCall === 'k') {
            //     console.log('Výhra user!')
            //     alert('Výhra');
    } else if (userChoice === 'p' && oneCall === 'n') {
        console.log('Prehra user!')
        alert('Prehra!'); 
    };
    
    //NOŽNICE
    if (userChoice === 'n' && oneCall === 'n') {
        console.log('Remíza!')
        alert('Remíza!');
    // } else if (userChoice === 'n' && oneCall === 'p') {
        //     console.log('Výhra user!')
        //     alert('Výhra');
    } else if (userChoice === 'n' && oneCall === 'k') {
        console.log('Prehra user!')
        alert('Prehra!'); 
    };
    
    
    // Skóre
    // const scoreUser = document.getElementById('user');
    
    // scoreUser.addEventListener(win(), function() {
    
        //    const userscoreElement = this.nextElementSibling,
        //        userscore = Number( userscoreElement.textContent );
        
        //        userscore = userscore + 1;
        //        userscoreElement.textContent = userscore;
        
        
    //    console.log( this );
    
    // });
    
    
    
}; 

scoreUser = document.getElementById("userscore").innerHTML
// document.getElementById("pcscore").innerHTML = scorePC

playGame.addEventListener('click', game);
nextGame.addEventListener('click', game);



