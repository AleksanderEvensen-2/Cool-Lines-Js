var ctx, canvas, width, height


var amount = 20;

init = function(){
    canvas = document.getElementById('ctx');
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    
    gameLoop();
}



var hpList = [];

var vpList = [];


function genVPoints(){
    var startPoint = {
        x:40,
        y:40,
    }
    
    for(var i = 0; i < amount; i++){
        var p = {
            x:startPoint.x,
            y:i*15+startPoint.y,
        }
        
        vpList[vpList.length] = p;
    }
}

function genHPoints(){
    var startPoint = {
        x:55,
        y:40,
    }
    
    for(var i = 0; i < amount; i++){
        
        var vpEnd;
        
        for(var key in vpList){
            vpEnd = key;
        }
        var p = {
            x:i*15+startPoint.x,
            y:vpList[vpEnd].y,
        }
        
        hpList[hpList.length] = p;
            
        
    }
}



function genPoints(num){
    hpList = [];
    vpList = [];
    amount = num;
    genVPoints();
    genHPoints();
}

genPoints(50);



function drawLine(p1, p2){
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
    ctx.restore();
}





function gameLoop(){
    ctx.clearRect(0,0,width,height);
    
    for(var i = 0; i < amount; i++){
        drawLine(hpList[i], vpList[i]);
    }

    
    
    requestAnimationFrame(gameLoop);
}



window.addEventListener("load", function load(){
   init(); 
});