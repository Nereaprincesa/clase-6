scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.over(false)
})
game.setDialogCursor(img`
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a 1 1 1 1 1 a a 1 1 1 1 1 a a 
    a a 1 1 1 1 1 a a 1 1 1 1 1 a a 
    a a 1 1 1 1 1 a a 1 1 1 1 1 a a 
    a a f f f 1 1 a a f f f 1 1 a a 
    a a f f f 1 1 a a f f f 1 1 a a 
    a a f f f 1 1 a a f f f 1 1 a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a f f a a a a f f a a a a 
    a a a a a f f f f f f a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    `)
game.showLongText("no me choques", DialogLayout.Bottom)
tiles.setTilemap(tilemap`level1`)
game.setDialogFrame(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `)
let mySprite2 = sprites.create(img`
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a 1 1 1 1 1 a a 1 1 1 1 1 a a 
    a a 1 1 1 1 1 a a 1 1 1 1 1 a a 
    a a f 1 1 1 1 a a f 1 1 1 1 a a 
    a a f f 1 1 1 a a f f 1 1 1 a a 
    a a f f 1 1 1 a a f f 1 1 1 a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a f a a a a a f a a a a a a 
    a a a a f a a a f a a a a a a a 
    a a a a a f f f a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite2)
controller.moveSprite(mySprite2)
info.setLife(3)
game.setDialogFrame(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 . . . . . . 
    . . . . . . . . . 3 . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `)
