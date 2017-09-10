function init(){map=document.getElementById("map"),ctxMap=map.getContext("2d"),map.width=gameWidth,map.height=gameHeight,ctxMap.fillStyle="#FFF",ctxMap.font="bold 15pt Arial",died=!1,matrixmap=new Array;for(a=0;a<30;a++)matrixmap[a]=new Array;for(var e=!1,i=!1,t=0;t<30;t++)for(var a=0;a<15;a++){var r=Math.floor(20*Math.random()+1),s=0;0==e&&1==Math.floor(20*Math.random()+1)?(matrixmap[a][t]=1,e=!0):(r>=0&&r<=12?s=0:r>=12&&r<=13?s=2:14==r?s=3:15==r?s=5:16==r?s=6:r>=17&&r<=18?s=7:r>=19&&r<=20&&(s=8),matrixmap[a][t]=s,0==i&&t>10&&a>5&&20==Math.floor(20*Math.random()+1)&&(matrixmap[a][t]=4,i=!0))}for(var d=0,o=0,n=0,h=0,m=0,c=0,p=0;p<matrixmap.length;p++)for(var g=0;g<matrixmap[p].length;g++)1==matrixmap[p][g]&&(player=new Player(12*g,12*p)),2==matrixmap[p][g]&&(lava[d]=new Lava(12*g,12*p),d++),3==matrixmap[p][g]&&(enemies[o]=new Enemy(12*g,12*p),o++),4==matrixmap[p][g]&&(door=new Door(12*g,12*p)),5==matrixmap[p][g]&&(lever[n]=new Lever(12*g,12*p),n++),6==matrixmap[p][g]&&(bridge[h]=new Bridge(12*g,12*p),h++),7==matrixmap[p][g]&&(doorportal[m]=new DoorPortal(12*g,12*p),m++),8==matrixmap[p][g]&&(doorportalexit[c]=new DoorExit(12*g,12*p),c++);time1=(new Date).getTime()/1e3,(audioHit=new Audio("audio/hit.wav")).loop=!1,document.addEventListener("keydown",checkKeyDown,!1),document.addEventListener("keyup",checkKeyUp,!1),startLoop()}function Player(e,i){this.srcX=0,this.srcY=0,this.drawX=e,this.drawY=i,this.speed=1,this.isUp=!1,this.isDown=!1,this.isLeft=!1,this.isRight=!1}function CollisionCheck(e,i,t){return e.drawX<i.drawX+t&&e.drawX+t>i.drawX&&e.drawY<i.drawY+t&&e.drawY+t>i.drawY?colliding=!0:colliding=!1,colliding}function Lava(e,i){this.srcX=0,this.srcY=0,this.drawX=e,this.drawY=i}function Enemy(e,i){this.srcX=0,this.srcY=0,this.drawX=e,this.drawY=i,this.speed=.5,this.timestart=(new Date).getTime()/1e3,this.time=0,this.moveup=!1,this.changedir=!1}function Door(e,i){this.srcX=0,this.srcY=0,this.drawX=e,this.drawY=i}function Bridge(e,i){this.srcX=0,this.srcY=0,this.drawX=e,this.drawY=i,this.timestart=(new Date).getTime()/1e3,this.time=0}function Lever(e,i){this.srcX=0,this.srcY=0,this.drawX=e,this.drawY=i}function DoorPortal(e,i){this.srcX=0,this.srcY=0,this.drawX=e,this.drawY=i}function DoorExit(e,i){this.srcX=0,this.srcY=0,this.drawX=e,this.drawY=i}function startLoop(){loop()}function stopLoop(){isPlaying=!1}function loop(){update(),requestAnimationFrame(loop)}function update(){if(0==isPlaying&&(ctxMap.clearRect(0,0,gameWidth,gameHeight),ctxMap.fillText("Press ENTER to start",90,90)),1==isPlaying){drawBg();for(e=0;e<lava.length;e++)lava[e].draw();door.draw();for(e=0;e<lever.length;e++)lever[e].draw();for(e=0;e<bridge.length;e++)bridge[e].draw(),bridge[e].update();for(e=0;e<doorportal.length;e++)doorportal[e].draw();for(e=0;e<doorportalexit.length;e++)doorportalexit[e].draw();for(var e=0;e<enemies.length;e++)enemies[e].draw(),enemies[e].update();player.draw(),player.update(),0==died&&0==predied&&0==doorexit&&((new Date).getTime()/1e3-time1>1&&(time1=(new Date).getTime()/1e3,timeleftseconds>0?timeleftseconds-=1:0==timeleftseconds&&(died=!0)),drawTime())}}function checkKeyDown(e){var i=e.keyCode||e.which,t=String.fromCharCode(i);13==i&&(0==isPlaying&&0==died?isPlaying=!0:1!=died&&1!=doorexit||window.location.reload(!0)),1==isPlaying&&("W"==t&&(player.isUp=!0,e.preventDefault()),"S"==t&&(player.isDown=!0,e.preventDefault()),"A"==t&&(player.isLeft=!0,e.preventDefault()),"D"==t&&(player.isRight=!0,e.preventDefault()),e.preventDefault())}function checkKeyUp(e){var i=e.keyCode||e.which,t=String.fromCharCode(i);1==isPlaying&&("W"==t&&(player.isUp=!1,e.preventDefault()),"S"==t&&(player.isDown=!1,e.preventDefault()),"A"==t&&(player.isLeft=!1,e.preventDefault()),"D"==t&&(player.isRight=!1,e.preventDefault()))}function deadscr(){ctxMap.font="bold 15pt Arial",ctxMap.clearRect(0,0,gameWidth,gameHeight),ctxMap.fillText("You died! Game over!",90,90)}function winscr(){ctxMap.font="bold 15pt Arial",ctxMap.clearRect(0,0,gameWidth,gameHeight),ctxMap.fillText("You win!",150,90)}function drawBg(){ctxMap.clearRect(0,0,gameWidth,gameHeight),ctxMap.drawImage(background,0,0,background.width,background.height,0,0,gameWidth,gameHeight)}function drawTime(){ctxMap.font="bold 8pt Arial",ctxMap.fillText("Time left: "+timeleftseconds,0,10)}window.onload=init;var gameWidth=360,gameHeight=180,size=12,isPlaying=!1,requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,map,ctxMap,player,door,diedseconds,audioHit,matrixmap,background=new Image;background.src="img/Background.png";var playerImage=new Image;playerImage.src="img/Player.png";var predied=!1,died=!1,doorImage=new Image;doorImage.src="img/Door.png";var doorexit=!1,time1,timeleftseconds=30,lavaImage=new Image;lavaImage.src="img/Lava.png";var lava=[],enemyImage=new Image;enemyImage.src="img/Enemie.png";var enemies=[],leverImage=new Image;leverImage.src="img/Lever.png";var lever=[],leverbridgeactivated=!1,bridgeImage=new Image;bridgeImage.src="img/Bridge.png";var bridge=[],bridgeactivated=!1,doorImagePortal=new Image;doorImagePortal.src="img/DoorPortal.png";var doorportal=[],doorImagePortal2=new Image;doorImagePortal2.src="img/DoorPortalExit.png";var doorportalexit=[];Player.prototype.draw=function(){ctxMap.clearRect(this.drawX,this.drawY,size,size),ctxMap.drawImage(playerImage,this.srcX,this.srcY,size,size,this.drawX,this.drawY,size,size)},Player.prototype.update=function(){this.drawX<0&&(this.drawX=0),this.drawX>gameWidth-size&&(this.drawX=gameWidth-size),this.drawY<0&&(this.drawY=0),this.drawY>gameHeight-size&&(this.drawY=gameHeight-size);for(e=0;e<lava.length;e++)CollisionCheck(player,lava[e],12)&&0==died&&0==predied&&(diedseconds=(new Date).getTime()/1e3,audioHit.play(),predied=!0);for(e=0;e<enemies.length;e++)CollisionCheck(player,enemies[e],12)&&0==died&&0==predied&&(diedseconds=(new Date).getTime()/1e3,audioHit.play(),predied=!0);CollisionCheck(player,door,12)&&0==died&&0==predied&&(doorexit=!0);for(e=0;e<lever.length;e++)CollisionCheck(player,lever[e],12)&&0==died&&0==predied&&0==leverbridgeactivated&&(leverbridgeactivated=!0);for(e=0;e<bridge.length;e++)CollisionCheck(player,bridge[e],12)&&0==died&&0==predied&&0==leverbridgeactivated&&(diedseconds=(new Date).getTime()/1e3,audioHit.play(),predied=!0);for(var e=0;e<doorportal.length;e++)CollisionCheck(player,doorportal[e],12)&&(this.drawX=doorportalexit[e].drawX,this.drawY=doorportalexit[e].drawY);1==predied&&(new Date).getTime()/1e3-diedseconds>=2&&(died=!0),1==doorexit&&winscr(),0==died&&0==predied&&0==doorexit?this.chooseDir():1==died&&deadscr()},Player.prototype.chooseDir=function(){this.isUp&&(this.drawY-=this.speed),this.isDown&&(this.drawY+=this.speed),this.isLeft&&(this.drawX-=this.speed),this.isRight&&(this.drawX+=this.speed)},Lava.prototype.draw=function(){ctxMap.clearRect(this.drawX,this.drawY,size,size),ctxMap.drawImage(lavaImage,this.srcX,this.srcY,size,size,this.drawX,this.drawY,size,size)},Enemy.prototype.draw=function(){ctxMap.clearRect(this.drawX,this.drawY,size,size),ctxMap.drawImage(enemyImage,this.srcX,this.srcY,size,size,this.drawX,this.drawY,size,size)},Enemy.prototype.update=function(){this.time=(new Date).getTime()/1e3,this.time-this.timestart>=.2&&(this.timestart=(new Date).getTime()/1e3,this.changedir=!1);for(var e=0;e<lava.length;e++)CollisionCheck(this,lava[e],12)&&0==this.changedir&&(this.moveup=!this.moveup,this.changedir=!0);this.drawY<0&&0==this.changedir&&(this.moveup=!this.moveup,this.changedir=!0),this.drawY>gameHeight&&0==this.changedir&&(this.moveup=!this.moveup,this.changedir=!0),1==this.moveup?this.drawY-=this.speed:this.drawY+=this.speed},Door.prototype.draw=function(){ctxMap.clearRect(this.drawX,this.drawY,size,size),ctxMap.drawImage(doorImage,this.srcX,this.srcY,size,size,this.drawX,this.drawY,size,size)},Bridge.prototype.draw=function(){ctxMap.clearRect(this.drawX,this.drawY,size,size),ctxMap.drawImage(bridgeImage,this.srcX,this.srcY,size,size,this.drawX,this.drawY,size,size)},Bridge.prototype.update=function(){0==leverbridgeactivated&&(bridgeImage.src="img/Lava.png"),1==leverbridgeactivated&&(bridgeImage.src="img/Bridge.png"),this.time=(new Date).getTime()/1e3,this.time-this.timestart>=5&&(this.timestart=(new Date).getTime()/1e3,leverbridgeactivated=!1)},Lever.prototype.draw=function(){ctxMap.clearRect(this.drawX,this.drawY,size,size),ctxMap.drawImage(leverImage,this.srcX,this.srcY,size,size,this.drawX,this.drawY,size,size)},DoorPortal.prototype.draw=function(){ctxMap.clearRect(this.drawX,this.drawY,size,size),ctxMap.drawImage(doorImagePortal,this.srcX,this.srcY,size,size,this.drawX,this.drawY,size,size)},DoorExit.prototype.draw=function(){ctxMap.clearRect(this.drawX,this.drawY,size,size),ctxMap.drawImage(doorImagePortal2,this.srcX,this.srcY,size,size,this.drawX,this.drawY,size,size)};