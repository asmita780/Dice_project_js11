document.getElementById("start").addEventListener("click", function(){
        makesound();

    let p1 = Math.floor(Math.random()*6)+1;
    let p2 = Math.floor(Math.random()*6)+1;
    document.getElementById("p1").src=`assets/${p1}.jpg`;
    document.getElementById("p2").src=`assets/${p2}.jpg`;
    if (p1>p2){
        document.querySelector("h1").textContent = "🥳player 1 wins🥳";

    }else if(p2>p1){
            document.querySelector("h1").textContent = "🥳player 2 wins🥳";
        }   
        else{
            document.querySelector("h1").textContent = "☘️Oops! it's a DRAW☘️"
            makesound3()
        }

});

function makesound(){
    let audio = new Audio("assets/sound.mp3");
    audio.play();
}

// function makesound1(){
//     let sound = new Audio("assets/sound2.wav");
//     sound.play();
// }

// function makesound2(){
//     let sound1 = new Audio("assets/sound3.wav");
//     sound1.play((sound1.duration)/20);
// }

function makesound3(){
    let sound2 = new Audio("assets/sound4.mp3");
    sound2.play();
}