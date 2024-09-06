let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#message");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");
 const getCompChoice=()=>{
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
 }
 const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
      user.innerText=++userScore;
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        comp.innerText=++compScore;
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
 }
const playGame=(userChoice)=>{
    const compChoice=getCompChoice();
    console.log(`Computer Choice=${compChoice}`)

    if(userChoice == compChoice){
        drawGame();
    } else{
        let userWin=true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin = compChoice==="scissors" ? false : true;
        }else{
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log(`userChoice=${userChoice}`);
        playGame(userChoice);
    })
})
const drawGame = () => {
    console.log("Game Was Draw");
    msg.innerText="Game was Drawn. Play Again";
    msg.style.backgroundColor="#0D1321";
}