let player="";
let comp="";

function selectWeapon(choice)
{
    player=choice;
    document.getElementById("choice").innerText=player + " is selected!";

}

function start()
{
    if(player=="")
        {document.getElementById("choice").innerText="Please select your weapon❗";
        return;}
      comp = ["rock", "paper", "scissor"][
        Math.floor(Math.random() * 3)];
        let clouds=document.querySelector(".cloud-transition");
        clouds.classList.add("active");

      setTimeout(function(){
          document.getElementById("home").style.display="none";
          document.getElementById("next").style.display="flex";
      },1000); 

      setTimeout(function(){
         clouds.classList.remove("active");
      },4000);

      if(player=="rock")
        document.getElementById("playerhand").innerText="✊";
      else
        if(player=="paper")
             document.getElementById("playerhand").innerText="🖐";
      else
        if(player=="scissor")
            document.getElementById("playerhand").innerText="✌";
        
      if(comp=="rock")
        document.getElementById("comphand").innerText="✊";
      else
        if(comp=="paper")
             document.getElementById("comphand").innerText="🖐";
      else
        if(comp=="scissor")
            document.getElementById("comphand").innerText="✌";

      if(player==comp)
        document.getElementById("result").innerText="Draw!🤝";
      else
        if( (player === "rock" && comp === "scissor") ||(player === "paper" && comp === "rock") ||(player === "scissor" && comp === "paper"))
            document.getElementById("result").innerText="You Won!🎉";
      else
        document.getElementById("result").innerText="You Lost!😢";  



}

 function playagain()
 {    let clouds=document.querySelector(".cloud-transition");
        clouds.classList.add("active");
   setTimeout(function(){
    document.getElementById("next").style.display = "none";
    document.getElementById("home").style.display = "flex";
     player = "";
    document.getElementById("choice").innerText="";
   },1000);

    setTimeout(function(){
         clouds.classList.remove("active");
      },1000);

 }

