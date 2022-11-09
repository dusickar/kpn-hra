function game() {
    var playGame = document.getElementById(playGame);
    alert('Hra začína! Zadaj hodnotu (k, p, n) a uvidíš či si vyhral!');


    //Voľba PC
    const PcChoice = (length = 1) => {
        // Declare all characters
        let chars = 'kpn';
    
        // Pick characters randomly
        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    
        return str;
    
    };
    console.log('PC:', PcChoice()); 
    
    
    //Voľba usera
    let userChoice = prompt('Tvoja voľba?');
    kpr = ['k',  'p',  'n'];
    console.log('User:', userChoice);
    
    
};


//Výsledok hry
function win() {
    if (userChoice === k && PcChoice === n) {
        alert('Vyhral si!')
        console.log('Výhra user!')
        return;
    };
    
    alert('Pre ďalšie kolo klikni na OK.');



    if (userChoice === 'p')
        if (PcChoice === 'k')
            alert('Vyhral si!')
            console.log('Výhra user!')
                alert('Pre ďalšie kolo klikni na OK.');

    if (userChoice === 'n')
        if (PcChoice === 'p')
            alert('Vyhral si!')
            console.log('Výhra user!')
                alert('Pre ďalšie kolo klikni na OK.');
};






    // alert('Prehral si!');
    // alert('Remíza');
    

playGame.addEventListener('click', game);




