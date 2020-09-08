var buttons = document.getElementsByClassName("flex-buttons")[0];

var decreaseButton=buttons.getElementsByClassName("button")[0];
var resetButton=buttons.getElementsByClassName("button")[1];
var increaseButton =buttons.getElementsByClassName("button")[2];

var counterNumber=document.getElementById("counter-number");
var total=0;


function decreaseFunction(){
    
    total=total-1;
    console.log(total);
   
    counterNumber.textContent=total;
    counterNumber.style.color=getColor();
};
function increaseFunction(){
    total=total+1;
    counterNumber.textContent=total;
    counterNumber.style.color=getColor();
};
function resetFunction(){
    total=0;
    counterNumber.textContent='0';
    counterNumber.style.color="black";   
};


function getColor(){
    if(total>0)
     return "green";

     else if(total<0)
       return "red";

       else
       return "black";
};
