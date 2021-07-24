
var y=100;
var k=400;
var k1=277;
var t=0;
var j=0;
var score=0;
var highscore=0;
var u=400,v=100;
var k2=2;
var x2=0;
var g2=1;
var loopCount=1;
var touchPowerup=0;
var powerPos=0;
var highestName=0;
  const controller = {

   
    up: false,
    down: true,
    keyListener: function (event){
      if(event.keyCode==32){
        if(t==0) {controller.up=true;controller.down=false;t=1;}
        else  {controller.down=true;controller.up=false;t=0;}
      }
    }
  
  };

  /*const loop = function () {
  
    if (controller.up  == true) {
  
      y = 40;
      
  
    }
  
    if (controller.down) {
  
      y = 100;
  
    }
  
    };*/
 
    function displayscore()
    { 
      highscore=localStorage.getItem('HighScore');
      if(score>highscore) {localStorage.setItem('HighScore', score);highscore=score;
      localStorage.setItem("highestName", JSON.stringify(playerName));highestName=playerName;}
      window.alert("Well played! "+ playerName +",your score is: "+score+"\nThe High score is: "+highscore+" by "+localStorage.getItem("highestName"));
    }
   
    const loop = function () {
      u-=0.5;
      loopCount++;
      if(loopCount%500==0) {touchPowerup=1;powerPos=300;}
     if(k2==2||k2==1) {v-=0.25;k2=1;}
     if(k2==1&&v==25) {k2=0;}
     if(k2==0) {v+=0.25;}
     if(v==110&&k2==0) {k2=2;}
     if(u==-10) {u=400;}
      score+=10;
      if(score>20000) {k-=(0.5);k1-=(0.5);score+=5;}
      else if(score>30000) {k--;k1--;score+=10;}
      if (controller.up  == true) {
       // y=20;
        j=1;
        g2=1;
       }
    
      if (controller.down) {
        //y=100;
        g2=0;
        j=2;
      }
      if(j==1&&y!=100) 
      {
        y+=1;
     }
     if(j==2&&y!=20) {
       
        y-=1;
     }
      if(y==100&&j==1) {j=0;}
      if(y==20&&j==2) {j=0;}
      if (controller.up  == true&&j==0) {
         y=100;
        
        }
        if (controller.down  == true&&j==0) {
          y=20;
         
         }
     
     
      k--;
      k1--;
      if(k1<=-25) k1=350;
      if(k<=-25) k=400;
      if(y== 100 && (k<=70&&k>=40)){displayscore();stopLoop();}
      if(y== 20 && (k1<=75&&k1>=35)){displayscore();stopLoop();}
      if(y>=(v-8)&&y<=(v+8)&&(u>=25)&&( u<=70)) {displayscore();stopLoop();}
      var canvas = document.getElementById("canvas");
  
      if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      
     ctx.fillStyle = "#201A23";
      ctx.fillRect(0, 0, 500, 400); 
     ctx.strokeStyle = "pink";
     ctx.lineWidth = 25;
     ctx.beginPath();
     ctx.moveTo(0,140);
     ctx.lineTo(400,140);
     ctx.stroke();
     ctx.strokeStyle = "green";
     ctx.lineWidth = 25;
     ctx.beginPath();
     ctx.moveTo(0,5);
     ctx.lineTo(400,5);
     ctx.stroke();
     /*ctx.fillStyle = "blue"; // hex for cube color
     ctx.beginPath();
     ctx.rect(20, y, 25, 25);
     ctx.fill();*/
     ctx.fillStyle = "#201A23"; // hex for cube color
     ctx.beginPath();
     ctx.rect(k, 125, 30, 25);
     ctx.fill();
     ctx.fillStyle = "#201A23"; // hex for cube color
     ctx.beginPath();
     ctx.rect(k1, 0, 25, 20);
     ctx.fill();
     if(touchPowerup==1)
     {
       ctx.font = "10px Comic Sans MS";
       ctx.fillStyle = "gold";
       ctx.fillText("+1000",powerPos,canvas.height/2);
      
     }
     powerPos--;
     if(touchPowerup==1)
     {
       if((powerPos)<=75&&(powerPos)>=30)
       if(y>=(canvas.height/2-25)&&(y<=canvas.height/2+10))
      { score+=1000;touchPowerup=0;}
     }
     if(g2==1)
     {
     ctx.beginPath();
     ctx.moveTo(25, y);
     ctx.lineTo(25+25, y+25);
     ctx.lineTo(25+50, y+25);
     ctx.fillStyle = 'violet'
     ctx.fill();
     }
     else 
     {
      ctx.beginPath();
      ctx.moveTo(50, y);
      ctx.lineTo(75, y);
      ctx.lineTo(25, y+25);
      ctx.fillStyle = 'violet'
      ctx.fill()
     }
     ctx.beginPath()
        ctx.arc(u,v,10,0,2*Math.PI)
        ctx.fillStyle = 'red'
        ctx.fill()
        ctx.closePath()
     window.requestAnimationFrame(loop);
      }
      }
   playerName = prompt('Enter your name ')
   window.addEventListener("keydown", controller.keyListener);
   window.addEventListener("keydup", controller.keyListener);
   window.requestAnimationFrame(loop);
 

