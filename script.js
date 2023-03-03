
let btns; 

function ChangeButton(answer, id){

    btns = [0,0,0,0,0];

    btns[answer] = 1;

    ClearButtons();

    for(i = 0;i < 5;i++){
        if (btns[i] == 1){
            let btn = document.getElementById(id) ;
            btn.style.backgroundColor = "#fb7413"
        }
    } 
}

function ClearButtons(){

    document.getElementById("btn0").style.backgroundColor = "hsl(215, 8%, 28%)"
    document.getElementById("btn1").style.backgroundColor = "hsl(215, 8%, 28%)"
    document.getElementById("btn2").style.backgroundColor = "hsl(215, 8%, 28%)"
    document.getElementById("btn3").style.backgroundColor = "hsl(215, 8%, 28%)"
    document.getElementById("btn4").style.backgroundColor = "hsl(215, 8%, 28%)"

}

function Submit(){
    for(i = 0;i < 5;i++){
        if (btns[i] == 1){
            let frm = document.getElementById("frmThankYou")
            frm.style.visibility = "visible"

            let finalRat = document.getElementById("1to5")
            finalRat.innerHTML = i + 1
        }
    } 
}

function Back(){
    document.location.reload(true)
}

