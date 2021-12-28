var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["543e1358-ea5f-4754-8b09-f35bd4c0675d"],"propsByKey":{"543e1358-ea5f-4754-8b09-f35bd4c0675d":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/gamelab/pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI/category_sports/soccer_blue.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI/category_sports/soccer_blue.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="blue";
    var computerPaddle= createSprite(10,200,10,100);
    computerPaddle.shapeColor="red";
    var ball= createSprite(200,200,10,10);
    ball.shapeColor="purple";
  
function draw() {
 background("brown")
  for( var y = 0; 1<400; y=y+20){;
    line(200,y,200, y+10)
  }
if (keyDown("space")) {
  ball.velocityX= 4;
ball.velocityY= -4;
}
  drawSprites(); 
  createEdgeSprites();
  computerPaddle.y =ball.y
  
  ball.bounceOff(topEdge)
  ball.bounceOff(bottomEdge)
  ball.bounceOff(playerPaddle)
  if (keyWentDown("up")) {
    playerPaddle.velocityY=-5
  }
  

  if (keyWentDown("down")) {
    playerPaddle.velocityY=5
  }
  if (keyWentUp("up")) {
    playerPaddle.velocityY=0
  }
    
   if (keyWentUp("down")) {
     playerPaddle.velocityY=0
   }
   if (ball.x> 400) {
      ball.x=200
   ball.y=200
   ball.velocityX=0
   ball.velocityY=0
   }
 
    
  
  
  ball.bounceOff(computerPaddle)
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
