var programCode = function(processingInstance) {
   with (processingInstance) {
     size(400, 400);
     frameRate(30);
    //Your code here
    var keys = [];

frameRate(60);

var endScreen = function(){

};

var rectRect = function(x1,y1,w1,h1,x2,y2,w2,h2){
   return(x1 + w1 > x2 && y1 + h1 > y2 && x1 < x2 + w2 && y1 < y2 + h2);
};
var Player = function(x,y){
   this.x = x;
   this.y = y;
   this.w = 20;
   this.h = 20;

   this.xv = 0;
   this.yv = 0;
   this.grav = 0.32;

   this.canJump = false;
};
Player.prototype.draw = function() {
   fill(0,0,255);
   noStroke();
   rect(this.x,this.y,this.w,this.h);
   fill(0);
   ellipse(this.x+6,this.y+10,4,10);
   ellipse(this.x+14,this.y+10,4,10);
};
Player.prototype.move = function(){
   this.px = this.x;
   this.py = this.y;
   this.y += this.yv;
   this.yv += this.grav;
   this.x += this.xv;
   this.xv = 0;
   if(keys[LEFT]){
       this.xv = -3;
   }
   if(keys[RIGHT]){
       this.xv = 3;
   }
   if(keys[UP]&&this.canJump){
       this.yv = -7;
       this.canJump = false;
   }
};
Player.prototype.collide = function(obj){
   if(obj.checkColl(this)){
       if(this.py <= obj.y - this.h) {
           this.y = obj.y - this.h;
           this.canJump = true;
           this.yv=0;
       }
       else if(this.px >= obj.x + obj.w) {
           this.x = obj.x+obj.w;
           this.xv = 0;
       }
       else if(this.px  <= obj.x- this.w) {
           this.x = obj.x-this.w;
           this.xv = 0;
       }
       else if(this.py >= obj.y + obj.h){
           this.y = this.py;
           this.yv = -this.yv;
       }
   }
};

var player = new Player(200, 200);

var blocks = [];
var Block = function(x,y,type){
   this.x = x;
   this.y = y;
   this.w = 20;
   this.h = 20;
   this.type = type;
};

Block.prototype.checkColl = function(obj){
   return(rectRect(this.x,this.y,this.w,this.h,obj.x,obj.y,obj.w,obj.h));
};

Block.prototype.display = function() {
   switch(this.type){
       case 'block':
           fill(0);
           rect(this.x,this.y,this.w,this.h);
       break;
       case 'portal':
           fill(187, 0, 255);
           ellipse(this.x+10,this.y+10,20,20);
       break;
       case 'lava':
           fill(255,0,0);
           rect(this.x,this.y,this.w,this.h);
       break;
   }
};


var level = 0;
var levels = [

   [
       'bbbbbbbbbbbbbbbbbbbb',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b...............@..b',
       'b..................b',
       'b..P...lll.........b',
       'bbbbbbbbbbbbbbbbbbbb',

   ],
   [
       'bbbbbbbbbbbbbbbbbbbb',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b..................b',
       'b...b...b.....@....b',
       'b.P.b...b..........b',
       'b...blllb..........b',
       'bbbbbbbbbbbbbbbbbbbb',

   ],
   [
    'bbbbbbbbbbbbbbbbbbbb',
    'b..................b',
    'b..................b',
    'b..................b',
    'b..................b',
    'b..................b',
    'b..................b',
    'b..................b',
    'b..................b',
    'b...........@......b',
    'b......b...........b',
    'b.b................b',
    'b......b...........b',
    'b...........b......b',
    'b................b.b',
    'b...........b......b',
    'b......b...........b',
    'b.P................b',
    'b..................b',
    'bbbbbbbbbbbbbbbbbbbb',

  ],
];

var drawLevel = function(){
   blocks = [];
   for(var i = 0; i < levels[level].length;i++){
       for(var j = 0; j < levels[level][i].length;j++){
           switch(levels[level][i][j]){
               case 'b':
                   blocks.push(new Block(j*20,i*20,'block'));
               break;
               //New Code
               case 'P':
                   player.x = j*20;
                   player.y = i*20;
               break;
               case '@':
                   blocks.push(new Block(j*20,i*20,'portal'));
               break;
               case 'l':
                   blocks.push(new Block(j*20,i*20,'lava'));
               break;
           }
       }
   }
};
drawLevel();

draw = function(){
   background(255,255,255);
   player.draw();
   player.move();
   for(var i = 0; i < blocks.length; i++){
       blocks[i].display();
       if(blocks[i].type === 'block'){
           player.collide(blocks[i]);
       }
       if(blocks[i].checkColl(player)){
           switch(blocks[i].type){
               case 'portal':
               if(level < levels.length-1){
                       level ++;
                       drawLevel();
                   }
                   else{
                     println('its working!');
                     noLoop();
                   }
               break;
               case 'lava':
                   drawLevel();
               break;
           }
       }
   }
};

keyPressed = function(){
   keys[keyCode] = true;
};

keyReleased = function(){
   keys[keyCode] = false;
};
   }};

 var canvas = document.getElementById("mycanvas");
 var processingInstance = new Processing(canvas, programCode);
