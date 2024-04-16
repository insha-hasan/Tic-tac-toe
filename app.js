let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
const win=[
    [0,1,2], 
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame= ()=>{
    turn0=true;
    enableBox();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn0){
        box.innerText="X";
        turn0=false;
        }
        else{
            box.innerText="O";
            turn0=true
        }
        box.disabled=true;
        checkWin();
    });
});
const disableBox=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const enableBox=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBox();
};
checkWin = () =>{
    for(let pattern of win){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val&& pos2Val===pos3Val){
            console.log("Winner",pos1Val);
            showWinner(pos1Val);
            }
        }
    }
};
newgame.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);