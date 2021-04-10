$(document).ready(function(){

    
    //GAME VARIABLES
    let game = {
        user: {
            score:0,
            bullets:0,
            choice:null
        },
        comp: {
            score:0,
            bullets:0,
            choice:null
        },
        choices: ["block", "load", "shoot"]
    };
    
    let compTurn = false;

    //UPDATE HTML ELEMENTS

    function updateBulletsEl(value){
        if (compTurn){
            $("#compBullets").html(value)    
        } else {
            $("#userBullets").html(value)

        }
    };

    function updateScoreEl(value){
        if(compTurn){
            $("#compScore").html(value)
        } else {
            $("#userScore").html(value)
        }
    };

    const shootImage = "assets/shootingGun.jpg";

    const loadImage ="assets/loadingBullets.jpg";

    const blockImage = "assets/blockingShield.jpg";


    //DOM events

    $("#load").click(function(evt){
        loadGun();
        compTurn = true;
        takeCompTurn(randomChoice());
    });



    function loadGun () {
        const player = game[userType()];
        player.bullets +=1;
        player.choice="load";
        getPoint();
        enableShoot();
        updateBulletsEl(player.bullets);
        updateScoreEl(player.score);
        const iconClass = compTurn ? '.compIcon' : '.userIcon';
        $(iconClass).attr('src', loadImage)
        winnerDeclaredReset();
    }


    $("#shoot").click(function(evt){
        shootGun();
        compTurn = true;
        takeCompTurn(randomChoice());
    });


    function shootGun () {
        const player = game[userType()];
        player.bullets -=1;
        player.choice="shoot";
        getPoint();
        enableShoot();
        updateBulletsEl(player.bullets);
        updateScoreEl(player.score);
        const iconClass = compTurn ? '.compIcon' : '.userIcon';
        $(iconClass).attr('src', shootImage);
        winnerDeclaredReset();
    }


    $("#block").click(function(evt){
        blockGun();
        compTurn = true;
        takeCompTurn(randomChoice());
    });

    function blockGun () {
        const player = game[userType()];
        player.choice="block";
        getPoint();
        enableShoot();
        updateScoreEl(player.score);
        const iconClass = compTurn ? '.compIcon' : '.userIcon';
        $(iconClass).attr('src', blockImage);
        winnerDeclaredReset();
    };

    //FUNCTIONS

    function enableShoot() {
        if(game.user.bullets > 0){
            shoot.removeAttribute("disabled");
        } else if (game.user.bullets === 0){
            shoot.setAttribute("disabled", "disabled");
        }
    };


    function userType(){
        if(compTurn){
            return "comp"
        } else {
            return "user"
        };
        
    };


    function getPoint() {
        const player = game[userType()];

        if (game.user.choice === "shoot" && game.comp.choice === "load"){
            game.user.score += 1;
        } else if (game.user.choice === "load" && game.comp.choice === "shoot"){
            game.comp.score += 1;
        } else {
            return player.score
        }
    };


    //computer choice
    function randomChoice (){
        let randomChoice
        if (game.comp.bullets === 0){
            randomChoice = game.choices[Math.floor(Math.random()*2)]
        } else {
            randomChoice = game.choices[Math.floor(Math.random()*game.choices.length)]
        };
        ;
        return randomChoice
        
    };


    function takeCompTurn(randomChoice){
        if(compTurn){    
            if (randomChoice === "shoot"){
                shootGun();
            } else if (randomChoice === "load"){
                loadGun();
            } else {
                blockGun();
            }
            compTurn = false
        }
    };


    function winnerDeclaredReset(){
        if(game.user.score > 5){
            alert("You won the game!");
            initGame();            
        } else if(game.comp.score > 5){
            alert("You lost!");
            initGAme();
        }
    };

    
    //INITIAL STATE OF GAME
    function initGame() {
        game = {
            user: {
                score:0,
                bullets:0,
                choice:null
            },
            comp: {
                score:0,
                bullets:0,
                choice:null
            },
            choices: ["block", "load", "shoot"]
        };
    };


    initGame();
});

