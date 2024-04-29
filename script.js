let ms=0;
let s=0;
let m=0;
let interval;
let timestamp=document.querySelector("#time");
watchStart=()=>{
    ms++;
    if(ms>=100){
        ms=0;
        s++;
        if(s>=60){
            s=0;
            m++;
        }
    }
    let millis=ms<10?"0"+ms:ms;
    let second=s<10?"0"+s:s;
    let min=m<10?"0"+m:m;

    timestamp.innerHTML=`${min} : ${second} : ${millis}`;
    
}

start = () => {
   if (!interval) { 
        interval = setInterval(watchStart, 10);
    }
}

stop=()=>{
    clearInterval(interval);
    interval = null;
}
reset=()=>{
    stop();
    ms=0;
    s=0;
    m=0;
    timestamp.innerHTML=`00 : 00 : 00`;
}

