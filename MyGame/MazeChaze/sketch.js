
var b1,b2,b3,b4;
var b5,b6,b7,b8,b9,b10,b11;
var b12,b13,b14,b15;
var b16,b17,b18,b19,b20,b21,b22,b23,b24;

var b25,b26,b27,b28;
var b29,b30,b31,b32,b33,b34,b35;
var b36,b37,b38,b39;
var b40,b41,b42,b43,b44,b45,b46,b47,b48,b49,b50;
var b51,b52,b53,b54,b55,b56,b57,b58,b59,b60;
var b61,b62,b63,b64,b65,b66,b67,b68,b69,b70,b71,b72,b73,b74;

var b75,b76,b77,b78,b79,b80,b81,b82,b83,b84,b85;
var b86,b87,b88,b89,b90,b91,b92,b93,b93,b94,b95,b96,b97,b98,b99,b100;
var b101,b102,b103,b104,b105,b106,b107,b108,b109,b110;
var b111,b112,b113,b114,b115,b116,b117,b118,b119,b120,b121,b122,b123,b124,b125;
var b126,b127,b128,b129,b130,b131,b132,b133,b134,b135,b136,b137,b138,b139,b140;
var b141,b142,b143,b144,b145,b146,b147,b148,b149,b150;
var b151,b152,b153,b154,b155,b156,b157,b158,b159,b160;
var b161,b162,b163,b164,b165,b166,b167,b168,b169,b170;
var b171,b172,b173,b174,b175,b176,b177,b178,b179,b180;
var b181,b182,b183,b184,b185,b186,b187,b188,b189,b190,b191,b192,b193;
var p1,p2;
var t;
var tI;

var form, player, game;
var database;
var gameState=0;
var playerCount=0;
var back;
var players;
var allPlayers;
var Home;

var walls=[];

function preload(){
   tI=loadImage("paint3D.png");
   //back=loadImage("maze.jpg");
}

function setup() {
  createCanvas(600,550);

  database = firebase.database();



  game=new Game();
  game.getState();
  game.start();
 
 
  
}

function draw() {
  background("red");  
   /*for(var i =0;i<walls.length;i++){
        p1.collide(walls[i]);
        p2.collide(walls[i]);
        console.log("sup");
     }*/

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState == 2)
  {
    game.end();
  }
  if(gameState == 3)
  {
    game.end2();
  }
}