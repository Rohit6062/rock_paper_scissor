let user = 0;
let com = 0;
const userscore_span = document.getElementById("player");
const compscore_span = document.getElementById("computer");
const new_game = document.getElementById("new");
const scoreboard_div = document.querySelector("score");
const result_div = document.querySelector(".message > p");
const result = document.getElementById("res");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
function compChoice() {
    const choice = ["r", "p", "s"];
    const randnumb = (Math.floor(Math.random() * 3));
    return choice[randnumb];
}
function convert(letter){
 if(letter== "r") return "rock";
 if(letter== "s") return "scissor";
 else return "paper";

}

function win(compchoice, userChoice) {
    user++;
    userscore_span.innerHTML = user;
    result_div.innerHTML=`${convert(userChoice)} beats ${convert(compchoice)}, You Win`;
    document.getElementById(userChoice).classList.add('green_circle')
    setTimeout(()=> document.getElementById(userChoice).classList.remove('green_circle'),500 )

}
function lose(compchoice,userChoice) {
    com++;
    // result.innerHTML = "you lose";
    result_div.innerHTML=`${convert(compchoice)} beats ${convert(userChoice)}, You Lose`;
    compscore_span.innerHTML = com;
    document.getElementById(userChoice).classList.add('red_circle')
    setTimeout(()=> document.getElementById(userChoice).classList.remove('red_circle'),500 )
}
function draw(userChoice) {
    result.innerHTML = "Its a tie!";
    document.getElementById(userChoice).classList.add('gray_circle')
    setTimeout(()=> document.getElementById(userChoice).classList.remove('gray_circle'),500 )
}
function reset(){
    userscore_span.innerHTML = "0";
    compscore_span.innerHTML = "0";
    result_div.innerHTML=" Welcome To Rock Paper Scissors";
    com=0;
    user=0;

}
function game(userChoice) {
    const compchoice = compChoice();
    switch (compchoice + userChoice) {
        case "rp":
            win(compchoice, userChoice);
            break;
        case "ps":
            win(compchoice, userChoice);
            break;
        case "sr":
            win(compchoice, userChoice);
            break;
        case "rs":
            lose(compchoice, userChoice);
            break;
        case "sp":
            lose(compchoice, userChoice);
            break;
        case "pr":
            lose(compchoice, userChoice);
            break;
        case "pp":
            draw(userChoice);
            break;
        case "rr":
            draw(userChoice);
            break;
        case "ss":
            draw(userChoice);
            break;
    }
}
function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p")
    })
    scissor_div.addEventListener('click', function () {
        game("s")
    })
    new_game.addEventListener('click',()=>{
        reset();
    })
}
main();