let timer=document.querySelector(".timer");
let container=document.querySelector(".container");
let grid=document.querySelector(".grid2");
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let restart=document.getElementById("restart");
let clear=document.getElementById("clear");
let get=document.getElementById("get");
let i=00;let m=00;let h=00;let id;let value;let storedvaluel;let formattedTime;
//1
let increase=()=>{
 
i++;if(i>60){i=0;m=m+1;}if(m>60){m=0;h++;}
formattedTime = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${i.toString().padStart(2, '0')}`;
timer.innerHTML = formattedTime;
// timer.innerHTML=`${h}:${m}:${i}`;
}
console.log(start.textContent);
let startfun=()=>{  clearInterval(id);
   id= setInterval(increase,1000);
 }
 let stopfun=()=>{
   value=timer.innerHTML;
 console.log(value);

 clearInterval(id);
 }

let restartfun=()=>{
   clearInterval(id);
i=0,m=0,h=0;
timer.innerHTML = "00:00:00";
startfun();

}
let getfun=()=>{
  
  const ele= document.createElement("p");
  formattedTime = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${i.toString().padStart(2, '0')}`;
  
   ele.textContent=`The timer is stopped on ${formattedTime}`;
   container.append(ele);

}
let clearfun=()=>{
   // grid.nextElementSibling.remove();
   const paragraphs = container.querySelectorAll("p");
    if (paragraphs.length > 0) {
      paragraphs.forEach(paragraph => {
          paragraph.remove();
      });
  }
   console.log("clear method");
   // console.log(grid.nextElementSibling.innerHTML);
}
//called
start.addEventListener("click",startfun);
stop.addEventListener("click",stopfun);
restart.addEventListener("click",restartfun);
get.addEventListener("click",getfun);
clear.addEventListener("click",clearfun);