

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["657f6dd0-371f-4f45-a914-debfefb945d7"],"propsByKey":{"657f6dd0-371f-4f45-a914-debfefb945d7":{"name":"red_ball","categories":["board_games_and_cards"],"frameCount":1,"frameSize":{"x":64,"y":64},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 18:43:21 UTC","pngLastModified":"2021-01-05 18:43:31 UTC","version":"RE_l5YYOr0C7UfiSQ23VeuLZTSzpIzhV","sourceUrl":null,"sourceSize":{"x":64,"y":64},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/657f6dd0-371f-4f45-a914-debfefb945d7.png"}}};
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

// Create the ball sprite
var ball = createSprite(200, 200);
ball.setAnimation("red_ball");
ball.scale = 0.3; // Adjust size of the ball

// Game variables
var score = 0;
var speed = 3;

// Set the initial direction for the ball
var directionX = 1;
var directionY = 1;

// Main game loop
function draw() {
  background("lightblue");

  // Move the ball
  ball.x += speed * directionX;
  ball.y += speed * directionY;

  // Ball bounces off the walls
  if (ball.x > 400 || ball.x < 0) {
    directionX *= -1;
  }
  if (ball.y > 400 || ball.y < 0) {
    directionY *= -1;
  }

  // Check if the ball is clicked
  if (mousePressedOver(ball)) {
    // Increase the score
    score += 1;

    // Make the ball move faster
    speed += 0.5;

    // Randomly change ball direction after each click
    directionX = randomNumber(-1, 1);
    directionY = randomNumber(-1, 1);
    
    // Relocate the ball to a random position
    ball.x = randomNumber(50, 350);
    ball.y = randomNumber(50, 350);
  }

  // Display the score
  textSize(20);
  text("Score: " + score, 20, 20);
  
  drawSprites();
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
