let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const opt = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return opt[randIdx];

};

const drawGame = () => {
    console.log("game was draw !");
    msg.innerText = "Game was Draw !";
    msg.style.backgroundColor = "#081b31" ; 
};

const showWinner = (userWin, choiceId , compId) => {
    if(userWin) {
        console.log("you win !");
        userScore++ ;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win :) Your ${choiceId} beats ${compId}`;
        msg.style.backgroundColor = "green" ; 
    } else{
        console.log("you lost!");
        compScore ++ ;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost :( ${compId} beats your ${choiceId}`;
        msg.style.backgroundColor = "red" ; 
    }
};


const playGame =(choiceId) => {
    console.log( "user's choice : " , choiceId);
    const compId = genCompChoice();
    console.log( "comp's choice : " , compId);


    if(choiceId===compId){
        //draw
        drawGame();
    }
    else {
        let userWin = true;
        if(choiceId=== "rock"){
            //scissor or paper
            userWin = compId === "paper" ? false : true;
        } else if(choiceId=== "paper"){
            //scissor or rock
            userWin = compId === "scissor" ? false : true;
        } else if(choiceId=== "scissor"){
            //paper or rock
            userWin = compId === "rock" ? false : true;
        }
        showWinner(userWin, choiceId , compId );
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const choiceId= choice.getAttribute("id");
        playGame(choiceId);
    })
});