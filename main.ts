controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f 4 4 4 4 4 4 f f f . . . 
        . . . f 4 4 4 4 4 4 4 4 f f f . 
        . . . f 4 4 4 4 4 4 f f f . . . 
        . . . f f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
    projectile.follow(mySprite4)
})
let projectile: Sprite = null
let mySprite4: Sprite = null
let mySprite: Sprite = null
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f 3 3 3 3 3 3 3 f . . . . 
    . . f 3 3 3 3 3 3 3 3 3 f . . . 
    . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 3 f 3 3 3 3 f 3 3 f . . 
    . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 3 3 f f f f f f f f . . 
    . . f 3 3 3 3 3 3 3 3 3 f . . . 
    . . . f 3 3 3 3 3 3 3 f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . f 4 4 4 4 4 4 f f f . . . 
    . . . f 4 4 4 4 4 4 4 4 f f f . 
    . . . f 4 4 4 4 4 4 f f f . . . 
    . . . f f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . f f f e e e f f f . . . 
    . . . f f e e e e e e e f . . . 
    . . f f e e e e e e e e f f . . 
    . f f e e e e e e e e e e f . . 
    . f e e e e e e e e e e e f . . 
    . f f e e e e e e e e e e f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f d d d d d d d f . . 
    . f f e e e f f f f f f f f . . 
    . f f e e e e e e e e e e f f . 
    . . f f f f e e e e e e e f f . 
    . . . . . . f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite4 = sprites.create(img`
    . . . . f f f f f f f . . . . . 
    . . f f 2 2 2 2 2 2 2 f f . . . 
    . f 2 2 2 2 2 2 2 2 2 2 2 f . . 
    . f f 2 2 2 2 2 2 f f 2 2 f . . 
    f 2 f f f 2 2 2 f f 2 2 2 2 f . 
    f 2 2 2 f f 2 f f 2 2 2 2 2 f . 
    f 2 2 2 2 f f f 2 2 2 2 2 2 f . 
    f 2 2 f 2 2 2 2 2 f 2 2 2 2 f . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 f . . 
    . f f f f f f f f f f 2 2 f . . 
    . . f f 2 2 2 2 2 2 2 f f . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite3.setVelocity(50, -50)
mySprite3.setBounceOnWall(true)
mySprite.setPosition(21, 20)
mySprite2.setPosition(139, 11)
mySprite3.setPosition(21, 100)
mySprite4.setPosition(139, 109)
mySprite4.follow(mySprite, 50)
controller.moveSprite(mySprite, 75, 75)
