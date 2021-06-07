let player1="Player 1"
let player2="Player 2"
let gameover=0;
let count=0;
function set()
{
    let p1=document.getElementById("player1").value
    let p2=document.getElementById("player2").value
    if(p1.length>0)
      player1=p1
    if(p2.length>0)
      player2=p2 
    document.getElementById("form").style.display='none'
    document.getElementById("player1name").innerHTML=player1
    document.getElementById("player2name").innerHTML=player2
    document.getElementById("table").style.display="flex"
    document.getElementById("table").style.height="60%"
    document.getElementById("player1name").style.color="green"
}
function checkWinner(myarg)
{
   let btn1=document.getElementById("btn1").innerHTML
   let btn2=document.getElementById("btn2").innerHTML
   let btn3=document.getElementById("btn3").innerHTML
   let btn4=document.getElementById("btn4").innerHTML
   let btn5=document.getElementById("btn5").innerHTML
   let btn6=document.getElementById("btn6").innerHTML
   let btn7=document.getElementById("btn7").innerHTML
   let btn8=document.getElementById("btn8").innerHTML
   let btn9=document.getElementById("btn9").innerHTML
   if(btn1==myarg && btn2==myarg && btn3==myarg)
   {
     gameover=5
   }
   else if(btn4==myarg && btn5==myarg && btn6==myarg)
   {
    gameover=5
   }
   else if(btn7==myarg && btn8==myarg && btn9==myarg)
   {
    gameover=5
   }
   else if(btn1==myarg && btn4==myarg && btn7==myarg)
   {
    gameover=5
   }
   else if(btn2==myarg && btn5==myarg && btn8==myarg)
   {
    gameover=5
   }
   else if(btn3==myarg && btn6==myarg && btn9==myarg)
   {
    gameover=5
   }
   else if(btn1==myarg && btn5==myarg && btn9==myarg)
   {
    gameover=5
   }
   else if(btn3==myarg && btn5==myarg && btn7==myarg)
   {
    gameover=5
   }
   else if(btn1==myarg && btn2==myarg && btn3==myarg)
   {
    gameover=5
   }
   if(gameover==5)
   {
     if(myarg=="<b>X</b>")
       gameover=1
     else
       gameover= 2 
   }
   else if(count==9)
     gameover=3
   
}
function check(argument)
{
  if(document.getElementById("btn"+argument).innerHTML=="")
  {
    if(count%2==0)
      {document.getElementById("btn"+argument).innerHTML="<b>X</b>"
      document.getElementById("btn"+argument).style.color="red"
      document.getElementById("player2name").style.color="green"
      document.getElementById("player1name").style.color="black"
      }
    else
     { document.getElementById("btn"+argument).innerHTML="<b>O</b>"
     document.getElementById("btn"+argument).style.color="blue"
     document.getElementById("player1name").style.color="green"
     document.getElementById("player2name").style.color="black"
    }
    count++
    checkWinner(document.getElementById("btn"+argument).innerHTML);
    console.log("gameover  = "+gameover);
    if(gameover>0)
    {
      document.getElementById("table").style.display='none'
      document.getElementById("player_name_div").style.display='none'
      document.getElementById("winner_div").style.display="flex";
      if(gameover==1)
      {document.getElementById("winner_message").innerHTML=player1+" won"
      document.getElementById("winner_message").style.color="red"
    }
      else if(gameover==2)
      {document.getElementById("winner_message").innerHTML=player2+" won"
      document.getElementById("winner_message").style.color="blue"
     }
      else 
     { document.getElementById("winner_message").innerHTML="draw"
     document.getElementById("winner_message").style.color="green"
    }
    }
  }
  
}
