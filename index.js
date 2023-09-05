const clock=document.querySelector(".clock");
let sec=0,min=0,hr=0,intervalID;

const start=document.getElementById("start");
const stop=document.getElementById("stop");

stop.disabled = true;
reset.disabled = true;

const startStopWatch=()=>{
    intervalID=setInterval(()=>{
        stop.disabled = false;
        reset.disabled = false;
        start.disabled = true;
        if(sec<59){
            sec++;
        }else if(min >=59){
            hr++;
            min=0;
        }else{
            sec=0;
            min++;
        }
    
        const seconds=sec.toString().padStart(2,"0");
        const minutes=min.toString().padStart(2,"0");
        const hours=hr.toString().padStart(2,"0");
        
        clock.innerText =`${hours}:${minutes}:${seconds}`;
    },1000);
};


const stopStopWatch=()=>{
    clearInterval(intervalID);
    stop.disabled = true;
    start.disabled = false;
    reset.disabled = false;
};
const resetStopWatch=()=>{
    clearTimeout(intervalID);
    sec=0,min=0,hr=0;
    const seconds=sec.toString().padStart(2,"0");
    const minutes=min.toString().padStart(2,"0");
    const hours=hr.toString().padStart(2,"0");
    clock.innerText =`${hours}:${minutes}:${seconds}`
    start.disabled = false;
    stop.disabled = true;
};