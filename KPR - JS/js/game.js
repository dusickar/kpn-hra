document.getElementById("playGame");

function game( result ) {
 
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
        console.log('PC : ' + str ) 
    
        return str;
    };
    
    
    
    //Voľba usera
    let userChoice = prompt('Tvoja voľba?');
    kpr = ['k',  'p',  'n'];
    console.log('User : ', userChoice);
    

    alert('Voľba PC : ' + PcChoice());


    //Výsledok hry
    function result() {
        console.log(PcChoice);
        console.log(userChoice);

        if (console.log(userChoice == 'k' && PcChoice == 'k')) {
            console.log('Remíza!')
            alert('Remíza!');
            alert('Pre ďalšie kolo klikni na OK.');
        } else if (console.log(userChoice == 'k' && PcChoice == 'n')) {
            console.log('Výhra user!')
            alert('Výhra');
        } else if (console.log(userChoice == 'k' && PcChoice == 'p')) {
            console.log('Prehra user!')
            alert('Prehra!'); 
        };
        return result;
    };
};

// };

    // // const resultP = 'p';
    // switch (resultP) {
    //     case 'k':
    //         console.log('Výhra user!')
    //         alert('Výhra')
    //         alert('Pre ďalšie kolo klikni na OK.');
    //         break;
    //     case 'p' :
    //         console.log('Remíza!')
    //         alert('Remíza!')
    //         alert('Pre ďalšie kolo klikni na OK.');
    //         break;
    //     case 'n' : 
    //         console.log('Prehra user!')
    //         alert('Prehra!')
    //         alert('Pre ďalšie kolo klikni na OK.');
    //         break;
    // }
    // // const resultN = 'n';
    // switch (resultN) {
    //     case 'k':
    //         console.log('Prehra user!')
    //         alert('Prehra!')
    //         alert('Pre ďalšie kolo klikni na OK.');
    //         break;
    //     case 'p' :
    //         console.log('Výhra user!')
    //         alert('Výhra!')
    //         alert('Pre ďalšie kolo klikni na OK.');
    //         break;
    //     case 'n' : 
    //         console.log('Remíza!')
    //         alert('Remíza!')
    //         alert('Pre ďalšie kolo klikni na OK.');
    //         break;
    // }
// };







//     if (userChoice === 'p')
//         if (PcChoice === 'k')
//             alert('Vyhral si!')
//             console.log('Výhra user!')
//                 alert('Pre ďalšie kolo klikni na OK.');

//     if (userChoice === 'n')
//         if (PcChoice === 'p')
//             alert('Vyhral si!')
//             console.log('Výhra user!')
//                 alert('Pre ďalšie kolo klikni na OK.');
// };






    // alert('Prehral si!');
    // alert('Remíza');
    

playGame.addEventListener('click', game);




