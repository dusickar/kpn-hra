function game() {
    var playGame = document.getElementById(playGame);
    alert('Hra začína! Zadaj hodnotu (kamen, papier, noznice) a uvidíš či si vyhral!');
    let choice = parseInt(prompt('Tvoja voľba?'));
    kpr = ['kamen',  'papier',  'noznice'];
    console.log(choice);
    
};

playGame.addEventListener('click', game);




