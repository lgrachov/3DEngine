// DON'T EDIT - else that will break engine! You only can edit image
function drawTriangle () {
    triangleIsHere = 1
    triangle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Player)
    controller.moveSprite(triangle, 100, 0)
}
// Jump Script
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    music.playSoundEffect(music.randomizeSound(music.createSoundEffect(WaveShape.Sine, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear)), SoundExpressionPlayMode.UntilDone)
    pause(100)
    while (!(camY == 60 && camYFull == 60)) {
        camY += -1
        camYFull += -1
    }
})
// DON'T EDIT - else that will break engine!
function movement () {
    camX = controller.player1.dx(5)
    camY = controller.player1.dy(5)
}
// DON'T EDIT - else that will break engine! You only can edit image
function drawSquare () {
    squareIsHere = 1
    square = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Player)
    controller.moveSprite(triangle, 100, 0)
}
// Walk Left Script
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.left.isPressed()) {
        music.playSoundEffect(music.randomizeSound(music.createSoundEffect(WaveShape.Noise, 3185, 1, 234, 1, 400, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve)), SoundExpressionPlayMode.UntilDone)
    }
})
// Walk Right Script
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.right.isPressed()) {
        music.playSoundEffect(music.randomizeSound(music.createSoundEffect(WaveShape.Noise, 3185, 1, 234, 1, 400, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve)), SoundExpressionPlayMode.UntilDone)
    }
})
// DON'T EDIT - else that will break engine! You only can edit image
function drawCircle () {
    circleIsHere = 1
    circle = sprites.create(img`
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(triangle, 100, 0)
}
// Here, you can make your level
let camXFull = 0
let circle: Sprite = null
let square: Sprite = null
let camX = 0
let camYFull = 0
let camY = 0
let triangle: Sprite = null
let circleIsHere = 0
let squareIsHere = 0
let triangleIsHere = 0
triangleIsHere = 0
squareIsHere = 0
circleIsHere = 0
drawTriangle()
// DON'T EDIT - else that will break engine!
forever(function () {
    movement()
    camXFull += camX
    camYFull += camY
    console.log(camXFull)
    console.log(camYFull)
    if (triangleIsHere == 1) {
        triangle.y += camY
    }
    if (squareIsHere == 1) {
        square.y += camY
    }
    if (circleIsHere == 1) {
        circle.y += camY
    }
})
