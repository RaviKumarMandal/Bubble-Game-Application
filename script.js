var timer = 30;
var score = 0;
var hitrn = 0;

var refresh = document.querySelector("#restart");
refresh.addEventListener('click', function(){
    location.reload();
})


function incrScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";

  for(var i = 0; i <= 101; i++){
    clutter += `<div class = "bubble">${Math.floor(Math.random()*10)}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer(){
    var timerCount = setInterval(function(){
        if(timer > 0){
            timer--;
        document.querySelector("#timerValue").textContent = timer;
        }else{
            clearInterval(timerCount);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`
        }
    }, 1000)
}



document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        incrScore();
        getNewHit();
        makeBubble();
    }

})


runTimer();
makeBubble();
getNewHit();
