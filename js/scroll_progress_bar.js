"use strict";

export function scrollProgressBar() {
    console.log("scroll progress live");
    progressBar();
    
}

function progressBar() {
    
    console.log("progress bar");

    const barNodeList = document.querySelectorAll("#scrollProgressBar .scrollBar");

    const circleNodeList = document.querySelectorAll("#scrollProgressBar .progressPoint");

    //first slide
    const button1f = document.querySelector("#form-slide_first button");

    //second slide
    const button2b = document.querySelector("#form-slide_second button:first-child");

    const button2f = document.querySelector("#form-slide_second button:last-child");

    //third slide
    const button3b = document.querySelector("#choose_game button:first-child");

    const button3f = document.querySelector("#choose_game button:last-child");

    //fourth slide
    const button4b = document.querySelector("#form-slide_third button:first-child");

    const button4f = document.querySelector("#form-slide_third button:last-child");

    //fifth slide
    const button5b = document.querySelector("#form-slide_fourth button:first-child");

    const button5f = document.querySelector("#form-slide_fourth button:last-child");

    //sixth slide 
    const button6b = document.querySelector("#form-slide_fifth button:first-child");

    const button6f = document.querySelector("#form-slide_fifth button:last-child");

    //seventh slide
    const button7b = document.querySelector("#form-slide_sixth button:first-child");

    const button7f = document.querySelector("#form-slide_sixth button:last-child");

    //slide 1

    //next 
    button1f.addEventListener("click", function(){
        nextPoint(barNodeList[0],circleNodeList[1]);
    });

    //slide 2

    //back
    button2b.addEventListener("click", function(){
        previousPoint(barNodeList[0],circleNodeList[1]);
    });
    //next
    button2f.addEventListener("click", function(){
        nextPoint(barNodeList[1],circleNodeList[2]);
    });

    //slide 3

    //back
    button3b.addEventListener("click", function(){
        previousPoint(barNodeList[1],circleNodeList[2]);
    });
    //next
    button3f.addEventListener("click", function(){
        nextPoint(barNodeList[2],circleNodeList[3]);
    });

    //slide 4

    //back
    button4b.addEventListener("click", function(){
        previousPoint(barNodeList[2],circleNodeList[3]);
    });
    //next
    button4f.addEventListener("click", function(){
        nextPoint(barNodeList[3],circleNodeList[4]);
    });

    //slide 5

    //back
    button5b.addEventListener("click", function(){
        previousPoint(barNodeList[3],circleNodeList[4]);
    });
    //next
    button5f.addEventListener("click", function(){
        nextPoint(barNodeList[4],circleNodeList[5]);
    });

    //slide 6

    //back
    button6b.addEventListener("click", function(){
        previousPoint(barNodeList[4],circleNodeList[5]);
    });
    //next
    button6f.addEventListener("click", function(){
        nextPoint(barNodeList[5],circleNodeList[6]);
    });

    //slide 7

    //back
    button7b.addEventListener("click", function(){
        previousPoint(barNodeList[5],circleNodeList[6]);
    });
    //next
    button7f.addEventListener("click", function(){
        nextPoint(barNodeList[6],circleNodeList[7]);
    });
}



function nextPoint(bar, circle) {
        bar.style.width = "8.57%";
        bar.style.transition = "0.5s";
        setTimeout(function(){
            circle.style.opacity = "1";
            circle.style.transition = "0.5s";
        }, 500);
}

function previousPoint(bar, circle) {
        circle.style.opacity = "0";
        circle.style.transition = "0.5s";
        
        setTimeout(function(){
            bar.style.width = "0%";
            bar.style.transition = "0.5s";
        }, 500);
}