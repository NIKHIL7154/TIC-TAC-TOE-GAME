var game=1
var turnvar="X"
document.getElementById("gamearena").style.display="none";
document.getElementById("windraw").style.display="none";
document.getElementById("loader").style.display="block";

logiclist =[0,[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]]

var gamedata=["0",1,2,3,4,5,6,7,8,9]

const nikhil=document.querySelectorAll(".btx");
nikhil.forEach(button =>{
    button.addEventListener('click',()=>{
        button.className="btxclick";
        mainlogic(button);
    });
});



function mainlogic(element){
    if(checkfunction(element)){
        element.innerHTML=turnvar;
        gamedata[element.id]=turnvar
        if(wincheck()){
            disablegrid();
            const game=setTimeout(declarewinner,500);

        }else if(drawcheck()){

            drawdeclare()
            

        }
        else{
            updateturn();
            playerturn();
        }

    }else{return}
}

function playerturn(){
    if(game==1){
        game=2
        document.getElementById("pl1").className="playername"
        document.getElementById("pl2").className="playername aopclass"
    }else{
        game=1
        document.getElementById("pl2").className="playername"
        document.getElementById("pl1").className="playername aopclass"
    }
}

function checkfunction(x){
    if(x.innerHTML==""){
        return true
    }else{
        return false
    }
}

function updateturn(){
    if(turnvar=="X"){
        turnvar="O";
    }else{
        turnvar="X"
    }
}

function wincheck(){
    var mainlength=parseInt(logiclist.length);
    for(i=1;i<mainlength;i++){
        
        let loglist=logiclist[i];
        let len=parseInt(loglist.length)
        let x="a",y="b",z="c";
        for(j=0;j<len;j++){
            
            
            if(x=="a"){
                x=loglist[j];
            }else if(y=="b"){
                y=loglist[j];
            }else{
                z=loglist[j];
            }
            

        }
        
        if((gamedata[x]==gamedata[y])&&(gamedata[y]==gamedata[z] )){
            return true
        }

    }
    return false

}

function drawdeclare(){
    document.getElementById("endinfo").innerHTML=("No one wins the game.");
    document.getElementById("windraw").style.display="flex";
}

function declarewinner(){
    document.getElementById("endinfo").innerHTML=(turnvar+" has won the game.");
    document.getElementById("windraw").style.display="flex";

}

function drawcheck(){
    var len=parseInt(gamedata.length)
    for(i=1;i<len;i++){
        if(Number.isInteger(gamedata[i])){
            return false
        }
    }
    return true
}

function playagain(){
    i=1
    document.getElementById("windraw").style.display="none";

    while(i<10){
        document.getElementById(i).innerHTML=""
        i++;
    }
    turnvar="X"
    game=2;
    playerturn()
    gamedata=["0",1,2,3,4,5,6,7,8,9]
    enablegrid()
    const updatebt=document.querySelectorAll(".btxclick");
    updatebt.forEach(x =>{
        x.className="btx";
    })

    
}

function vfriend(){
    document.getElementById("gamearena").style.display="block";
    document.getElementById("loader").style.display="none";
}

function vcomp(){
    document.getElementById("gamearena").style.display="block";
    document.getElementById("loader").style.display="none";
}

function disablegrid(){
    i=1

    while(i<10){
        document.getElementById(i).setAttribute('disabled','');
        document.getElementById(i).className="btxclick";
        i++;
    }

}

function enablegrid(){
    i=1

    while(i<10){
        document.getElementById(i).removeAttribute('disabled')
        
        i++;
    }
}



