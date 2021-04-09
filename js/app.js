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

    const shootImage = document.createElement('img')
    shootImage.src="assets/shootingGun.jpg"

    const loadImage = document.createElement('img')
    loadImage.src="assets/loadingBullets.jpg"

    const blockImage = document.createElement('img')
    blockImage.src="assets/blockingShield.jpg"





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
        console.log(game);
        updateBulletsEl(player.bullets);
        updateScoreEl(player.score);
        document.querySelector('.userIcon').appendChild(loadImage);
        
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
        console.log(game);
        updateBulletsEl(player.bullets);
        updateScoreEl(player.score);
        document.querySelector('.userIcon').appendChild(shootImage);
    }


    $("#block").click(function(evt){
        blockGun();
        compTurn = true;
        takeCompTurn(randomChoice());
        console.log(game);
    });

    function blockGun () {
        const player = game[userType()];
        player.choice="block";
        getPoint();
        enableShoot();
        updateScoreEl(player.score);
        document.querySelector('.userIcon').appendChild(blockImage);
        
    };

    //DISABLES AND ENABLES SHOOT BUTTON DEPENDING ON # OF BULLETS
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

    //GIVES POINT TO PLAYER THAT SHOOTS WHILE OTHER PLAYER IS LOADING
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


    //COMPUTERS CHOICE
    function randomChoice (){
        let randomChoice
        if (game.comp.bullets === 0){
            randomChoice = game.choices[Math.floor(Math.random()*2)]
        } else {
            randomChoice = game.choices[Math.floor(Math.random()*game.choices.length)]
        };
        ;
        console.log(randomChoice);//get rid of console.log
        return randomChoice
        
    };

    //COMPUTERS TURN
    function takeCompTurn(randomChoice){
        if(compTurn){
            if (randomChoice === "shoot"){
                shootGun();
                document.querySelector('.compIcon').appendChild(shootImage);
            } else if (randomChoice === "load"){
                loadGun();
                document.querySelector('.compIcon').appendChild(loadImage);
            } else {
                blockGun();
                document.querySelector('.compIcon').appendChild(blockImage);
            }

            compTurn = false
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

    

       // $("#compScore, #compBullets, #userScore, userBullets").empty();

    };


    initGame();
});

