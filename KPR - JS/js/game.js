document.getElementById("playGame");

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

    // KAMEŇ
    if (userChoice === 'k' && oneCall === 'k') {
        console.log('Remíza!')
        alert('Remíza!');
        
    } else if (userChoice === 'k' && oneCall === 'n') {
        console.log('Výhra user!')
        alert('Výhra');
    } else if (userChoice === 'k' && oneCall === 'p') {
        console.log('Prehra user!')
        alert('Prehra!'); 
    };

    //PAPIER
    if (userChoice === 'p' && oneCall === 'p') {
        console.log('Remíza!')
        alert('Remíza!');
        alert('Pre ďalšie kolo klikni na OK.');
    } else if (userChoice === 'p' && oneCall === 'k') {
        console.log('Výhra user!')
        alert('Výhra');
    } else if (userChoice === 'p' && oneCall === 'n') {
        console.log('Prehra user!')
        alert('Prehra!'); 
    };

    //NOŽNICE
    if (userChoice === 'n' && oneCall === 'n') {
        console.log('Remíza!')
        alert('Remíza!');
        alert('Pre ďalšie kolo klikni na OK.');
    } else if (userChoice === 'n' && oneCall === 'p') {
        console.log('Výhra user!')
        alert('Výhra');
    } else if (userChoice === 'n' && oneCall === 'k') {
        console.log('Prehra user!')
        alert('Prehra!'); 
    };

    alert('Pre ďalšie kolo klikni na OK.');
};


playGame.addEventListener('click', game);



