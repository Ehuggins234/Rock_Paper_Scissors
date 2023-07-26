function start(play) {
    play.style.display = "none";
    unhide_buttons();
}

function action(id) {
    var player_move = "";
    var cpu_move = "";
    /* player_move and cpu_move:
        1 = Rock, 2 = Paper, 3 = Scissors
    */
    var player_image = document.getElementById("p1");
    var cpu_image = document.getElementById("cpu");
    hide_buttons();
    cpu_move = computer_action();
    switch(id){
        case "rock_button": 
            player_move = "rock";
            ChangeImage(player_image,player_move);
            ChangeImage(cpu_image,cpu_move);
            document.getElementById("title").innerHTML = win_lose(player_move,cpu_move);
            break;
        case "paper_button":
            player_move = "paper";
            ChangeImage(player_image,player_move);
            ChangeImage(cpu_image,cpu_move);
            document.getElementById("title").innerHTML = win_lose(player_move,cpu_move);
            break;
        case "scissors_button":
            player_move = "scissors";
            ChangeImage(player_image,player_move);
            ChangeImage(cpu_image,cpu_move);

            document.getElementById("title").innerHTML = win_lose(player_move,cpu_move);
            break;
    } 
    setTimeout(play_again,1000);
}
function play_again() {
    document.getElementById("play").style.display = "inline";
}


function computer_action(){ //Calculates what the CPU throws
    var option = Math.floor(Math.random()*3)+1;
    console.log(option);
    var cpu_choice = "";
    switch(option){
        case 1:
            cpu_choice="rock";
            break;
        case 2:
            cpu_choice="paper";
            break;
        case 3:
            cpu_choice="scissors";
            break;
    }
    return cpu_choice;
}

function win_lose(player_move,cpu_move) {
    var result = ""
    if(player_move === cpu_move){
        result = "Draw";
    }
    else if((player_move == "rock" && cpu_move == "paper")|| (player_move == "paper" && cpu_move == "scissors") || (player_move == "scissors" && cpu_move == "rock")){
        result = "cpu wins";
    }
    else if((player_move == "rock" && cpu_move == "scissors")||(player_move == "paper" &&cpu_move == "rock") || (player_move=="scissors" && cpu_move == "paper")){
        result = "player wins";
    }
    return result;
 }

function hide_buttons() { //Hides rock,paper, and scissors buttons
    document.getElementById("rock_button").hidden = true;
    document.getElementById("paper_button").hidden = true;
    document.getElementById("scissors_button").hidden = true;
}

function unhide_buttons() { //Unhides rock,paper, and scissors buttons
    document.getElementById("rock_button").hidden = false;
    document.getElementById("paper_button").hidden = false;
    document.getElementById("scissors_button").hidden = false;
}

function ChangeImage(img,choice) {
    switch(choice) {
        case "rock":
            if(img.src != "images/Rock.jpg"){
                img.src = "images/Rock.jpg";
            }
            break;
        case "paper":
            if(img.src != "images/Paper.jpg"){
                img.src = "images/Paper.jpg";
            }
            break;
        case "scissors":
            if(img.src !="images/Scissors.jpg"){
                img.src = "images/Scissors.jpg";
            }

    }
}
