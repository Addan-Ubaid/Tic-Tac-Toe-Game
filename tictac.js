let btn=document.querySelectorAll(".box");
let res=document.querySelector("#resbtn");
let newbtn=document.querySelector("#newbtn");

let player=true;
let count=0;


let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],
        [1,4,7],[2,5,8],[0,4,8],[2,4,6]];

for(let button of btn){
    button.addEventListener("click",()=>{
        if(player){
            button.innerText="X"
            player=false;
        }
        else{
            button.innerText="O";
            player=true;
        }
        count++;
       button.disabled=true;
       checkWinner();
    });

reset=()=>{              //game reset funtion
        player=true;
        count=0;
        enableboxes();
    msgcontainer.classList.add("hide");
    draw.classList.add("mhide");
}


enableboxes=()=>{for(let i of btn){
    i.disabled=false;
    i.innerText="";
}}
}


btndis=()=>{    //btndis stands for disable button
    for(let h of btn){
        h.disabled=true;
    }}
    let msgcontainer=document.querySelector(".msg");
    let Winner=(win)=>{
        msgcontainer.innerText=`Winner is ${win}`;
        msgcontainer.classList.remove("hide");
        btndis();

}
let draw=document.querySelector(".draw");
let drawftn=()=>{
    draw.innerText="Game is a Draw";
    draw.classList.remove("mhide");
}
const checkWinner=()=>{
    winnerfound=false;
    
    for(let pattern of win){
        let oneval=btn[pattern[0]].innerText;
        let twoval=btn[pattern[1]].innerText;
        let threeval=btn[pattern[2]].innerText;
        if(oneval !=""&& twoval !="" && threeval !=""){
            if(oneval === twoval && twoval === threeval){
                
                console.log(oneval," is Winner !!");
                winnerfound=true;
                Winner(oneval);
            }
        }
    }
    if(count===9 && winnerfound!=true){
        drawftn();
    }
   
};

    res.addEventListener("click",reset);
    newbtn.addEventListener("click",reset);