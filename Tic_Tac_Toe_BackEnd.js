
let playerTurn = false; 

function addEvent(){
    for (let i = 0; i < 9; i++){

        
       let boardSpot =  document.querySelector(`#spot${i}`); 
       boardSpot.addEventListener("click", function (i){

        if (playerTurn){
            i.target.textContent = "X";
        } else {
            i.target.textContent = "O";
        }
        playerTurn = !playerTurn; 
    });
    }
}


function placeMark(event){

    if (playerTurn){
        document.querySelector(`#spot${event.id}`).textContent = "X";
    } else {
        document.querySelector(`#spot${event.id}`).textContent = "O";
    }
    playerTurn = !playerTurn; 
}





let reset = document.getElementsByTagName("button")[0];






reset.addEventListener("click", function (event){
    for (let i = 0; i < 9; i++){
        let boardSpot =  document.querySelector(`#spot${i}`); 
        boardSpot.textContent = ""
    }
});

addEvent();