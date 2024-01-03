var minutes=25;
var seconds=0;
var timer;
var isRuning=false;

function startTimer(){
    isRuning=true;
    timer=setInterval(function(){
if(seconds===0){
    if(minutes===0){
        clearInterval(timer);
        isRuning=false;
        alert("Time's Up");
        return;

    }
    minutes--
    seconds=59;
}
else{
    seconds--
}
document.getElementById("minutes").textContent=padTime(minutes);
document.getElementById("seconds").textContent=padTime(seconds);
    },1000)
}
 
function pauseTimer(){
    clearInterval(timer)
    isRuning=false;
}


function resetTimer(){
    minutes=25;
    seconds=0;
    document.getElementById("minutes").textContent="25";
    document.getElementById("seconds").textContent="00";
    isRuning=false;
    clearInterval(timer);
}

function padTime(time){
    return time<10?"0"+time:time;
}

window.addEventListener("DOMContentLoaded",function(){
    document.getElementById("startbtn").addEventListener("click",function(){
if(!isRuning){
    startTimer();
}
    })
    document.getElementById("pausebtn").addEventListener("click",function(){
        if(isRuning){
            pauseTimer();
        }
            })
            
            document.getElementById("resetbtn").addEventListener("click",function(){
                if(isRuning){
                    resetTimer();
                }
                    })
})