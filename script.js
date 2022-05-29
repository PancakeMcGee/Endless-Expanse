/* eslint-env browser */
var character = document.getElementById("character");
var block = document.getElementById("block");
document.addEventListener("click", jump);
function jump(){
    if(character.classList == "animate"){return;}
    character.classList.add("animate");
    setTimeout(removeJump, 300);
}
function removeJump(){
    character.classList.remove("animate");
}
function checkDead(){
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        alert("Game over");
    }
}


setInterval(checkDead, 10);


