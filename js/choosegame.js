"use strict";

export function startChooseGame() {
    console.log("choosegame loaded");

    activeCheckboxStates();

}

function activeCheckboxStates() {
    console.log("checkbox states are active.");

    const checkboxNodeList = document.querySelectorAll("#choose_game fieldset .container");

    checkboxNodeList.forEach(node => {
        node.children[0].checked = false;
    });

    checkboxNodeList.forEach(label => {

        const gameName = label.children[0].value;
        let gameState = label.children[0].checked;

        

        label.children[0].addEventListener("click", function(){
            
            if (gameState == true) {
                gameState = false;
                console.log(gameName + " state = " + gameState);
                
                label.style.backgroundImage = `url(./icons/games_svg_gray/${gameName}.svg)`;
            }

            else if (gameState == false) {
                gameState = true;
                console.log(gameName + " state = " + gameState);
               
                label.style.backgroundImage = `url(./icons/games_svg/${gameName}.svg)`;   
            }
        });
    })

    
}
