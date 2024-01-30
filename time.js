const  hourE1=document.querySelector("#hour");
const  minutesE1=document.querySelector("#mintes");
const secondsE1=document.querySelector("#seconds");
const ampmE1=document.querySelector("#ampm");

function updateClock()
{
    var h=new Date().getHours();
    var m=new Date().getMinutes();
    var s=new Date().getSeconds();
    var ampm="AM"



    if(h > 12)
    {
    h=h-12;
    ampm="PM"
    }
    h=h<10 ? "0"+h:h;
    m= m<10 ? "0"+m:m;
    s= s<10 ? "0"+s:s;

    hourE1.innerText =h;
    minutesE1.innerText =m;
    secondsE1.innerText =s;
    ampmE1.innerText = ampm
 setTimeout(updateClock, 1000);
}
updateClock();