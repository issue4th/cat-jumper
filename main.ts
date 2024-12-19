namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
    export const Fireball = SpriteKind.create()
    export const Torch = SpriteKind.create()
    export const gem_coin = SpriteKind.create()
    export const draconium_coin = SpriteKind.create()
    export const portal = SpriteKind.create()
}
/**
 * Cat movement
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
function start_flowers () {
    for (let temporary of sprites.allOfKind(SpriteKind.Flower)) {
        temporary.destroy()
    }
    for (let location of tiles.getTilesByType(assets.tile`tile5`)) {
        temporary = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 3 a . . a 3 . . . . . . 
            . . . . a 3 2 2 3 a . . . . . . 
            . . 7 7 . a 3 3 a . . . . . . . 
            . . 7 7 7 . c c . 7 7 . . . . . 
            . . . 8 7 7 7 . 7 7 7 . . . . . 
            . . . 8 8 7 7 7 7 8 . . . . . . 
            . . . . . 8 7 7 8 . . . . . . . 
            . . . . . . 7 8 . . . . . . . . 
            `, SpriteKind.Flower)
        tiles.placeOnTile(temporary, location)
        tiles.setTileAt(location, assets.tile`tile0`)
    }
}
function start_fireballs () {
    for (let temporary of sprites.allOfKind(SpriteKind.Fireball)) {
        temporary.destroy()
    }
    for (let location of tiles.getTilesByType(assets.tile`tile11`)) {
        temporary = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . 5 5 2 5 5 4 5 5 . . . . 
            . . . . . 4 4 4 4 2 4 . . . . . 
            . . . 5 4 4 2 2 2 2 4 5 . . . . 
            . . . 5 4 . 2 8 2 8 4 2 . . . . 
            . . . 5 5 . 2 8 8 2 4 5 . . . . 
            . . . 2 5 2 2 8 2 4 4 5 . . . . 
            . . . . 5 4 2 2 2 4 5 . . . . . 
            . . . . . . 4 . 4 4 5 . . . . . 
            . . . 5 . 5 5 5 4 5 5 . . . . . 
            . . . . . . . 2 5 5 . . . . . . 
            . . . . . . . . . . . . . 5 . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Fireball)
        temporary.startEffect(effects.fire)
        tiles.placeOnTile(temporary, location)
        tiles.setTileAt(location, assets.tile`tile0`)
        animation.runMovementAnimation(
        temporary,
        "c 0 -100 0 100 0 0",
        2000,
        true
        )
    }
    for (let location of tiles.getTilesByType(assets.tile`myTile10`)) {
        temporary = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
            . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
            . . 4 4 5 5 1 1 1 1 1 4 4 . . . 
            . . 4 4 5 5 1 1 1 1 1 4 4 . . . 
            . . 4 4 5 5 1 1 1 1 1 4 4 . . . 
            . . 4 4 5 5 1 1 1 1 1 4 4 . . . 
            . . 4 4 5 5 1 1 1 1 1 4 4 . . . 
            . . 4 4 5 5 5 5 5 5 5 4 4 . . . 
            . . 4 4 5 5 5 5 5 5 5 4 4 . . . 
            . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
            . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Fireball)
        temporary.startEffect(effects.fire)
        tiles.placeOnTile(temporary, location)
        tiles.setTileAt(location, assets.tile`tile0`)
        animation.runMovementAnimation(
        temporary,
        "c 0 150 0 -150 0 0",
        2000,
        true
        )
    }
}
function start_portals () {
    for (let temporary of sprites.allOfKind(SpriteKind.portal)) {
        temporary.destroy()
    }
    for (let location of tiles.getTilesByType(assets.tile`myTile30`)) {
        temporary = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c c c . . . 
            . . . . c a a a a a a a d c . . 
            . . . c a a a a a a d d b c . . 
            . . c d b a a a a d b b a c . . 
            . c a d b b b b b b b a a c . . 
            . c a a d b f f f b b a a a c . 
            . c a a a b f d f f b a a a c . 
            . c a a a b f f d f b a a a c . 
            . c a a a b b f f f b a a a c . 
            . c a a a b b b b b b b a a c . 
            . c a a b b d d d d d b a c . . 
            . . c b d d a a a a a d b a c . 
            . . . c c a a a a a a d c . . . 
            . . . . . c c c c c c c . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.portal)
        tiles.setTileAt(location, assets.tile`fire 1`)
        tiles.placeOnTile(temporary, location)
        animation.runImageAnimation(
        temporary,
        [img`
            . . . . . . . . 4 . . . . . . 4 
            . 4 . . . c c c c c c c c . . . 
            . . . . c a a a a a a a d c . . 
            . . . c a a a a a a d d b c . . 
            . . c d b a a a a d b b a c . 4 
            . c a d b b b b b b b a a c . . 
            . c a a d b 9 9 9 b b a a a c . 
            . c a a a b 9 d 9 9 b a a a c . 
            . c a a a b 9 9 d 9 b a a a c 4 
            . c a a a b b 9 9 9 b a a a c . 
            . c a a a b b b b b b b a a c . 
            4 c a a b b d d d d d b a c . . 
            . . c b d d a a a a a d b a c . 
            . . . c c a a a a a a d c . . . 
            . 4 . . . c c c c c c c . 4 . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 4 . . . . . 4 . . . 
            . . 4 . . c c c c c c c c . . 4 
            4 . . . c a a a a a a a d c . . 
            . . . c a a a a a a d d b c . 4 
            4 . c d b a a a a d b b a c . . 
            . c a d b b b b b b b a a c . . 
            . c a a d b f f f b b a a a c . 
            . c a a a b f d f f b a a a c 4 
            . c a a a b f f d f b a a a c . 
            . c a a a b b f f f b a a a c . 
            . c a a a b b b b b b b a a c . 
            . c a a b b d d d d d b a c . . 
            . . c b d d a a a a a d b a c . 
            4 . . c c a a a a a a d c . . . 
            . . . . . c c c c c c c . . 4 . 
            . . . 4 . . . . . . . . 4 . . . 
            `],
        100,
        true
        )
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hops_and_Paw.vy == 0) {
        Hops_and_Paw.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(Hops_and_Paw, assets.tile`myTile31`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    current_level = 700
    startLevel()
})
function hide_start_position () {
    for (let value of tiles.getTilesByType(assets.tile`tile6`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    game.over(false, effects.melt)
})
function start_torches () {
    for (let temporary of sprites.allOfKind(SpriteKind.Torch)) {
        temporary.destroy()
    }
    for (let location of tiles.getTilesByType(assets.tile`tile3`)) {
        temporary = sprites.create(img`
            2 4 4 2 . 2 . . 2 . 2 . 3 . . . 
            . . 2 . . . 5 2 . . 4 . . . . . 
            . 2 . 5 2 4 2 4 . 2 . . 5 2 . . 
            . 3 5 5 4 2 2 . 2 . . 4 2 . 2 . 
            . . 5 2 2 . 5 . . . 4 4 . . 5 . 
            . 4 4 2 . 2 2 . 5 4 4 . . 2 . 2 
            5 4 2 2 4 4 4 4 4 2 2 . . 5 4 2 
            2 2 . 2 2 2 2 4 2 4 5 4 5 4 4 2 
            2 2 4 5 2 2 4 2 4 4 2 2 2 2 2 2 
            2 2 4 4 4 2 2 2 4 2 2 4 2 . 2 2 
            2 4 4 2 2 . 4 4 2 2 2 2 2 2 2 2 
            2 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 8 2 c 2 2 2 2 2 2 
            2 2 c 2 c 2 c c c c c 2 2 c 2 2 
            c c c c c c c c c c c c c c c c 
            `, SpriteKind.Torch)
        temporary.startEffect(effects.fire)
        tiles.placeOnTile(temporary, location)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.draconium_coin, function (sprite, otherSprite) {
    info.changeScoreBy(20)
    otherSprite.destroy(effects.confetti, 200)
})
function start_coins () {
    for (let temporary of sprites.allOfKind(SpriteKind.Coin)) {
        temporary.destroy()
    }
    for (let location of tiles.getTilesByType(assets.tile`tile4`)) {
        temporary = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 4 4 5 5 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . . f 5 5 4 4 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Coin)
        tiles.placeOnTile(temporary, location)
        tiles.setTileAt(location, assets.tile`tile0`)
        animation.runImageAnimation(
        temporary,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 4 4 4 4 4 5 5 5 f . . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 5 4 4 4 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 4 4 4 4 5 5 f . . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 4 5 5 f . . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 4 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 4 5 5 f . . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 4 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
    for (let temporary of sprites.allOfKind(SpriteKind.gem_coin)) {
        temporary.destroy()
    }
    for (let location of tiles.getTilesByType(assets.tile`myTile13`)) {
        temporary = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f a a a a a a a f . . . 
            . . . f a a 3 3 3 3 a a a f . . 
            . . f a a a a a a a a a a a f . 
            . . f a 3 a a a a a a a a a f . 
            . . f a 3 a a a a a a a a a f . 
            . . f a 3 a a a a a a a a a f . 
            . . f a 3 a a a a a a a a a f . 
            . . f a 3 a a a a a a a a a f . 
            . . f a 3 a a a a a a a a a f . 
            . . . f a a 3 3 a a a a a f . . 
            . . . . f a a a a a a a f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.gem_coin)
        tiles.placeOnTile(temporary, location)
        tiles.setTileAt(location, assets.tile`tile0`)
        animation.runImageAnimation(
        temporary,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f a a a a a a a f . . . . 
            . . f a 3 3 3 3 3 a a a f . . . 
            . f a 3 a a a a a a a a a f . . 
            . f a 3 a a a a a a a a a f . . 
            . f a 3 a a a a a a a a a f . . 
            . f a 3 a a a a a a a a a f . . 
            . f a 3 a a a a a a a a a f . . 
            . f a 3 a a a a a a a a a f . . 
            . f a a a a a a a a a a a f . . 
            . . f a a 3 3 3 a a a a f . . . 
            . . . f a a a a a a a f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f a a a a a f . . . . . 
            . . . f a 3 3 3 3 a a f . . . . 
            . . f a 3 a a a a a a a f . . . 
            . . f a 3 a a a a a a a f . . . 
            . . f a 3 a a a a a a a f . . . 
            . . f a 3 a a a a a a a f . . . 
            . . f a 3 a a a a a a a f . . . 
            . . f a 3 a a a a a a a f . . . 
            . . f a a a a a a a a a f . . . 
            . . . f a a 3 3 a a a f . . . . 
            . . . . f a a a a a f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . f a 3 3 a a f . . . . . 
            . . . f a 3 a a a a a f . . . . 
            . . . f a 3 a a a a a f . . . . 
            . . . f a 3 a a a a a f . . . . 
            . . . f a 3 a a a a a f . . . . 
            . . . f a 3 a a a a a f . . . . 
            . . . f a 3 a a a a a f . . . . 
            . . . f a a a a a a a f . . . . 
            . . . . f a a 3 a a f . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . f a 3 a f . . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a a a a a f . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . f 3 f . . . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . f 3 f . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . f 3 f . . . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . f a 3 a f . . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a a a a a f . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . f a 3 3 a a f . . . . . 
            . . . f a 3 a a a a a f . . . . 
            . . . f a 3 a a a a a f . . . . 
            . . . f a 3 a a a a a f . . . . 
            . . . f a 3 a a a a a f . . . . 
            . . . f a 3 a a a a a f . . . . 
            . . . f a 3 a a a a a f . . . . 
            . . . f a a a a a a a f . . . . 
            . . . . f a a 3 a a f . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
    for (let temporary of sprites.allOfKind(SpriteKind.draconium_coin)) {
        temporary.destroy()
    }
    for (let location of tiles.getTilesByType(assets.tile`myTile17`)) {
        temporary = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 5 5 . . . 
            . . . 5 5 5 9 9 9 9 5 5 5 5 . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 9 5 5 5 5 5 5 5 9 5 5 . 
            . . 5 5 9 5 9 9 9 9 5 5 9 5 5 . 
            . . 5 5 9 5 9 5 5 5 5 5 9 5 5 . 
            . . 5 5 9 5 9 5 5 5 5 5 9 5 5 . 
            . . 5 5 9 5 9 9 9 9 5 5 9 5 5 . 
            . . 5 5 9 5 5 5 5 5 5 5 9 5 5 . 
            . . . 5 5 5 9 9 5 5 5 5 5 5 . . 
            . . . . 5 5 5 5 5 5 5 5 5 . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.draconium_coin)
        tiles.placeOnTile(temporary, location)
        tiles.setTileAt(location, assets.tile`tile0`)
        animation.runImageAnimation(
        temporary,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . 5 5 5 9 9 9 9 5 5 5 5 . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 9 5 5 5 5 5 5 5 9 5 5 . . 
            . 5 5 9 5 9 9 9 9 5 5 9 5 5 . . 
            . 5 5 9 5 9 5 5 5 5 5 9 5 5 . . 
            . 5 5 9 5 9 5 5 5 5 5 9 5 5 . . 
            . 5 5 9 5 9 9 9 9 5 5 9 5 5 . . 
            . 5 5 9 5 5 5 5 5 5 5 9 5 5 . . 
            . . 5 5 5 9 9 5 5 5 5 5 5 . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 4 . . . . . . 
            . . . . 4 4 4 4 4 4 4 . . . . . 
            . . . 4 4 9 9 9 9 4 4 4 . . . . 
            . . 4 4 9 4 4 4 4 4 4 4 4 . . . 
            . . 4 4 9 4 4 4 4 4 9 4 4 . . . 
            . . 4 4 9 4 9 9 9 4 9 4 4 . . . 
            . . 4 4 9 4 9 4 4 4 9 4 4 . . . 
            . . 4 4 9 4 9 4 4 4 9 4 4 . . . 
            . . 4 4 9 4 9 9 9 4 4 4 4 . . . 
            . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
            . . . 4 4 4 9 9 4 4 4 4 . . . . 
            . . . . 4 4 4 4 4 4 4 . . . . . 
            . . . . . 4 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 9 9 2 2 2 . . . . . 
            . . . 2 2 9 2 2 2 2 2 2 . . . . 
            . . . 2 2 9 2 2 2 2 9 2 . . . . 
            . . . 2 2 9 2 9 9 2 9 2 . . . . 
            . . . 2 2 9 2 9 2 2 9 2 . . . . 
            . . . 2 2 9 2 9 2 2 2 2 . . . . 
            . . . 2 2 9 2 9 9 2 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 9 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 3 . . . . . . . . 
            . . . . . . 3 3 3 . . . . . . . 
            . . . . . 3 3 9 3 3 . . . . . . 
            . . . . 3 3 9 3 3 3 3 . . . . . 
            . . . . 3 3 9 3 9 9 3 . . . . . 
            . . . . 3 3 9 3 3 9 3 . . . . . 
            . . . . 3 3 9 3 3 9 3 . . . . . 
            . . . . 3 3 9 3 3 9 3 . . . . . 
            . . . . 3 3 9 3 3 3 3 . . . . . 
            . . . . 3 3 3 3 3 3 3 . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 . . . . . . . 
            . . . . . . . 3 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b 9 b . . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b 9 b b b . . . . . . 
            . . . . . b 9 b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . a . . . . . . . . 
            . . . . . . a a a . . . . . . . 
            . . . . . . a 9 a . . . . . . . 
            . . . . . . a a a . . . . . . . 
            . . . . . . a a a . . . . . . . 
            . . . . . . a a a . . . . . . . 
            . . . . . . a a a . . . . . . . 
            . . . . . . a a a . . . . . . . 
            . . . . . . a a a . . . . . . . 
            . . . . . . a a a . . . . . . . 
            . . . . . . a a a . . . . . . . 
            . . . . . . a a a . . . . . . . 
            . . . . . . . a . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c 9 c . . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c 9 c c c . . . . . . 
            . . . . . c 9 c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . d . . . . . . . . 
            . . . . . . d d d . . . . . . . 
            . . . . . d d 9 d d . . . . . . 
            . . . . d d 9 d d d d . . . . . 
            . . . . d d 9 d 9 9 d . . . . . 
            . . . . d d 9 d d 9 d . . . . . 
            . . . . d d 9 d d 9 d . . . . . 
            . . . . d d 9 d d 9 d . . . . . 
            . . . . d d 9 d d d d . . . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . d d d d d . . . . . . 
            . . . . . . d d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . 1 1 9 9 1 1 1 . . . . . 
            . . . 1 1 9 1 1 1 1 1 1 . . . . 
            . . . 1 1 9 1 1 1 1 9 1 . . . . 
            . . . 1 1 9 1 9 9 1 9 1 . . . . 
            . . . 1 1 9 1 9 1 1 9 1 . . . . 
            . . . 1 1 9 1 9 1 1 1 1 . . . . 
            . . . 1 1 9 1 9 9 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . . 1 1 1 9 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
}
function clear_previous_enemies () {
    for (let enemies of sprites.allOfKind(SpriteKind.Enemy)) {
        enemies.destroy()
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    current_level += 1
    startLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flower, function (sprite, otherSprite) {
    otherSprite.destroy()
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `],
    100,
    true
    )
    bee.setPosition(Hops_and_Paw.x + 80, Hops_and_Paw.y - 80)
    bee.follow(Hops_and_Paw, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gem_coin, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fireball, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    otherSprite.destroy()
})
function startLevel () {
    game_mode = true
    controller.moveSprite(Hops_and_Paw, 80, 0)
    scene.setBackgroundColor(9)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999911111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999991111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999911111111111111199999999111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999111111111111111119999911111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999111111111111111111999911111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999991111111111111111111199111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999911199991111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999111119911111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999111111911111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999991111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999991111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999991111111111111111111111111111111111111111111111999999999999999999999999999999991111199999999999999999999999999999999999999999991111999999999999999
        9999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999991111111999999911199999999999999999999999999999911111119111199999999
        9999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999991111111199111111119999999999999999999999999999111111111111119999999
        9999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999911111111119111111111999999999999999999999999991111111111111111999999
        9999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999911111111111111111111199999999999999999999999911111111111111111999999
        9999999999999999111111111111111111111111111111111111111111111999999999999999999999999999999911111111111111111111199111999999999999999999911111111111111111999999
        9999999999999991111111111111111111111111111111111111111111999999999999999999999999999999999911111111111111111111111111199999999999999999111111111111111111999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111999999999999999111111111111111111999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111199999999999999911111111111111111999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111119999999999999999111111111111119999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111119999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999996666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999966666666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999666666666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999996666666666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999966666666666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999666666666666666666999999999999999999999999999999999999966669999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999996666666666666666666666999999999999999999999999999999996666669999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999966666666666666666666666669999999999999999999999999999666666666999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999666666666666666666666666666699999999999999999999999996666666666999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999966666666666666666666666666666669999999999999999999999966666666666699999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999996666666666666666666666666666666666999999999999999999996666666666666669999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999666666666666666666666666666666666666669999999999999999966666666666666669999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999996666666666666666666666666666666666666666669999999999999666666666666666666699999999999999999999999999999999999999999999999999
        9999999999999999999999999999999996666666666666666666666666666666666666666666666999999999996666666666666666666666669999999999999999999999999999999999999999999999
        9999999999999999999999999999999966666666666666666666666666666666666666666666666669999999966666666666666666666666666699999999999999999999999969999999999999999999
        9999999999999999999999999999966666666666666666666666666666666666666666666666666666699999666666666666666666666666666666999999999999999999996666699999999999999999
        9999999999999999999999999996666666666666666666666666666666666666666666666666666666966666666666666666666666666666666666666999999999999999666666669999999999999999
        9999999999999999999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999966666666666699999999999999
        9999999999999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999666666666666699999999999999
        9999999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699966666666666666666999999999999
        9999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999
        9999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `)
    if (current_level == 1) {
        tiles.setTilemap(tilemap`level 1`)
    } else if (current_level == 2) {
        tiles.setTilemap(tilemap`level_0`)
    } else if (current_level == 3) {
        tiles.setTilemap(tilemap`level_3`)
    } else if (current_level == 4) {
        tiles.setTilemap(tilemap`level5`)
    } else if (current_level == 5) {
        tiles.setTilemap(tilemap`level6`)
    } else if (current_level == 6) {
        tiles.setTilemap(tilemap`level20`)
    } else if (current_level == 7) {
        controller.moveSprite(Hops_and_Paw, 80, 80)
        tiles.setTilemap(tilemap`level26`)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
    } else if (current_level == 8) {
        controller.moveSprite(Hops_and_Paw, 80, 0)
        tiles.setTilemap(tilemap`level24`)
        scene.setBackgroundImage(img`
            6666677766677777777777777777776677766666666666677777777777777777777777777777777777776677766666666666677777777777777777777777777777777777777777777777777777777777
            6666677766677777777777777777776677766666666666677777777777777777777777777777777777776677766666666666677777777777777777777777777777777777777777777777777777777777
            6666677766677777777777777777776677766666666666677777777777777777777777777777777777776677766666666666677777777777777777777777777777777777777777777777777777777777
            6666666677767777777777777777766666677766666666677777777777777777777777777777777666666666677766666666667777777777777777777777777777777777777777777777777777777777
            6666666677766677777777777777666666677766666666666777777777777777777777777777776666666666677766666666667777777777777777777777777777777777777777777777777777777777
            6666666677766666666666666666666666677766666666666667777777777777777777776666666666666666677766666666666666777777777777777777777777777777777777777777777777777777
            6666677766666666666666666666666677766666666666666666667777777777777777666666666666666677766666666666666666666667777777777777777777777777777777777777777777777777
            6666677766666666666666666666666677766666666666666666666777777777777776666666666666666677766666666666666666666666666666666777777777777777777777777777777777777777
            6666677766666666666666666666666677766666666666666666666667777777777666666666666666666677766666666666666666666666666666666777777777777777777777777777777777777777
            6666666677766666666666666666666666677766666666666666666666666666666666666666666666666666677766666666666666666666666666666666777777777777777777777777777777777777
            6666666677766666666666666666666666677766666666666666666666666666666666666666666666666666677766666666666666666666666666666666666777777777777777777777777777777777
            6666666677766666666666666666666666677766666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666667777777777777777777777777777
            6666677766666666666666666666666677766666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666667777777777777777777777777
            6666677766666666666666666666666677766666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666667777777777777777777777
            6666677766666666666666666666666677766666666666666666666666666666666666666666666666666677766666666665556666666666666666666666666666666666666666777777777777777777
            6666666677766666666666666666666666677766666666666666666666666666666666666666666666666666677766666665556666666666666666666666666666666666666666666666777777777777
            6666666677766666666666666666666666677766666666666666666666666666666666666666666666666666677766666665556666666666666666666666666666666666666666666666666666666666
            6666666677766666666665556666666666677766666666666666666666666666666666666666666666666666677766666665556666666666666666666666666666666666666666666666666666666666
            6666677766666666666665556666666677766666666666666666666666666666666666666666666666666677766666666665556666666666666666666666666666666666666666666666666666666666
            6666677766666666666665556666666677766666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666666
            6666677766666666666665556666666677766666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666666
            6666666677766666666665556666666666677766666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666
            6666666677766666666665556666666666677766666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666
            6666666677766666666666666666666666677766666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666677766666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666677766666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666677766666666666666665556666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666677766666666666665556666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666677766666666666665556666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666677766666666666665556666666666666666666666666666666666677766666666666666666666666555666666666666666666666666665556666666666666
            6666666666666666666666666666666677766666666666666665556666666666666666666666666666666677766666666666666666666666666555666666666666666666666666665556666666666666
            6666666666666666666666666666666677766666666666666666666666666666666666666666666666666677766666666666666666666666666555666666666666666666666666665556666666666666
            7777766666666666666666666666666677766666666666666666666666666666666666666666666666666677766666666666666666666666666555666666666666666666666666665556666666666666
            7777777666666666666666666666666666677766666666666666666666666666666666666666666666666666677766666666666666666666666555666666666666666666666666665556666666666666
            7777777766666666666666666666666666677766666666666666666666666666666666666666666666666666677766666666666666666666666555666666666666666666666666666666666666666666
            7777777776666666666666666666666666677766666666666666666666666666666666666666666666666666677766666666666666666666666555666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666666677766666555666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666666677766666555666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666677766666666555666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666677766666666555666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666677766666666555666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666666677766666555666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666666677766666555666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666666666666
            7777777777666666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666677777
            7777777777666666666666666666666666666666666666555666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666677777
            7777777777666666666666666666666666666666666666555666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666777777
            7777777777666666666666666666666666666666666666555666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666667777777
            7777777777666666666666666666666666666666666666555666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666667777777
            7777777777666666666666666666666666666666666666555666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666667777777
            7777777777666666666666666666666666666666666666555666666666666666666666655566666666666666677766666666666666666666666666666666666666666666666666666666666667777777
            7777777777666666666666666666666666666666666666555666666666666666666666655566666666666666677766666666666666666666666666666666666666666666666666666666666667777777
            7777777777666666666666666666666666666666666666666666666666666666666666655566666666666666677766666666666666666666666666666666666666666666666666666666666667777777
            7777777776666666666666666666666666666666666666666666666666666666666666655566666666666677766666666666666666666666666666666666666666666666666666666666666667777777
            7777777776666666666666666666666666666666666666666666666666666666666666655566666666666677766666666666666666666666666666666666666666666666666666666666666667777777
            7777777776666666666666666666666666666666666666666666666666666666666666655566666666666677766666666666666666666666666666666666666666666666666666666666666667777777
            7777777776666666666666666666666666666666666666666666666666666666666666655566666666666666677766666666666666666666666666666666666666666666666666666666666667777777
            7777777776666666666666666666666666666666666666666666666666666666666666655566666666666666677766666666666666666666666666666666666666666666666666666666666667777777
            7777777776666666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666667777777
            7777777776666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666667777777
            7777777766666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666667777777
            7777777766666666666666666666666666666666666666666666666666666666666666666666666666666677766666666666666666666666666666666666666666666666666666666666666667777777
            7777777666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777
            7777777666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777
            7777777666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777
            7777776666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777
            7777766666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555666666666666666666666666666666667777777
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555666666666666666666666666666666667777777
            6666666666555666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555666666666666666666666666666666667777777
            6666666666555666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555666666666666666666666666666666667777777
            6666666666555666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555666666666666666666666666666666667777777
            6666666666555666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555666666666666666666666666666666666777777
            6666666666555666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555666666666666666666666666666666666677777
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666667777777777777777776666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666777777777777777777777777777776666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666777777777777777777777777777777777777766666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666667777777777777777777777777777777777777776666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666677777777777777777777777777777777777777777766666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666777777777777777777777777777777777777777777777766666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666677777777777777777777777777777777777777777777777777666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666667777777777777777777777777777777777777777777777777777776666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666777777777777777777777777777777777777777777777777777777777666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666667777777777777777777777777777777777777777777777777777777777776666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666667777777777777777777777777777777777777777777777777777777777777766666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666667777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666667777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666666666666666666666666666666666
            `)
    } else if (current_level == 9) {
        tiles.setTilemap(tilemap`level27`)
    } else if (current_level == 10) {
        tiles.setTilemap(tilemap`level28`)
    } else if (current_level == 11) {
        tiles.setTilemap(tilemap`level29`)
    } else if (current_level == 12) {
        tiles.setTilemap(tilemap`level30`)
    } else if (current_level == 13) {
        tiles.setTilemap(tilemap`level32`)
    } else if (current_level == 500) {
        tiles.setTilemap(tilemap`level14`)
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999911111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999991111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999911111111111111199999999111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999111111111111111119999911111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999111111111111111111999911111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999991111111111111111111199111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999911199991111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999111119911111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999111111911111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999991111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999991111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999991111111111111111111111111111111111111111111111999999999999999999999999999999991111199999999999999999999999999999999999999999991111999999999999999
            9999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999991111111999999911199999999999999999999999999999911111119111199999999
            9999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999991111111199111111119999999999999999999999999999111111111111119999999
            9999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999911111111119111111111999999999999999999999999991111111111111111999999
            9999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999911111111111111111111199999999999999999999999911111111111111111999999
            9999999999999999111111111111111111111111111111111111111111111999999999999999999999999999999911111111111111111111199111999999999999999999911111111111111111999999
            9999999999999991111111111111111111111111111111111111111111999999999999999999999999999999999911111111111111111111111111199999999999999999111111111111111111999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111999999999999999111111111111111111999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111199999999999999911111111111111111999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111119999999999999999111111111111119999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111119999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999996666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999966666666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999666666666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999996666666666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999966666666666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999666666666666666666999999999999999999999999999999999999966669999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999996666666666666666666666999999999999999999999999999999996666669999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999966666666666666666666666669999999999999999999999999999666666666999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999666666666666666666666666666699999999999999999999999996666666666999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999966666666666666666666666666666669999999999999999999999966666666666699999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999996666666666666666666666666666666666999999999999999999996666666666666669999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999666666666666666666666666666666666666669999999999999999966666666666666669999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999996666666666666666666666666666666666666666669999999999999666666666666666666699999999999999999999999999999999999999999999999999
            9999999999999999999999999999999996666666666666666666666666666666666666666666666999999999996666666666666666666666669999999999999999999999999999999999999999999999
            9999999999999999999999999999999966666666666666666666666666666666666666666666666669999999966666666666666666666666666699999999999999999999999969999999999999999999
            9999999999999999999999999999966666666666666666666666666666666666666666666666666666699999666666666666666666666666666666999999999999999999996666699999999999999999
            9999999999999999999999999996666666666666666666666666666666666666666666666666666666966666666666666666666666666666666666666999999999999999666666669999999999999999
            9999999999999999999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999966666666666699999999999999
            9999999999999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999666666666666699999999999999
            9999999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699966666666666666666999999999999
            9999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999
            9999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            `)
    } else if (current_level == 600) {
        tiles.setTilemap(tilemap`level22`)
    } else if (current_level == 700) {
        tiles.setTilemap(tilemap`level14`)
    } else {
        game.over(true)
    }
    info.setLife(5)
    tiles.placeOnRandomTile(Hops_and_Paw, assets.tile`tile6`)
    scene.cameraFollowSprite(Hops_and_Paw)
    clear_previous_enemies()
    hide_start_position()
    start_portals()
    start_torches()
    start_fireballs()
    start_flowers()
    start_coins()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    current_level = 500
    startLevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    current_level = 600
    startLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Hops_and_Paw.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let bee: Sprite = null
let current_level = 0
let temporary: Sprite = null
let Hops_and_Paw: Sprite = null
let game_mode = false
game_mode = false
scene.setBackgroundColor(1)
tiles.setTilemap(tilemap`level8`)
Hops_and_Paw = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . . . 
    . . . . . . . . . . . . f f f . 
    . . . . . . . . . . . . f f 5 f 
    f f f f f f f f f f f f f f f f 
    . . . . f f f f f f f f f f . . 
    . . . . f f f f f f f f f . . . 
    . . . . f . f . . . f . f . . . 
    . . . . f . f . . . f . f . . . 
    `, SpriteKind.Player)
controller.moveSprite(Hops_and_Paw, 80, 0)
tiles.placeOnRandomTile(Hops_and_Paw, assets.tile`tile6`)
scene.cameraFollowSprite(Hops_and_Paw)
let over_hogweed = false
hide_start_position()
game.onUpdate(function () {
    if (Hops_and_Paw.vy < 0) {
        Hops_and_Paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . f . . . . 
            . . . . . . . . . . . f f f . . 
            . . . . . . . . . . . f f 5 f . 
            . . . f . . . . . . f f f f f . 
            . . . f . . . . . . f f f f . . 
            . . f f . . . . . f f f . . . . 
            . . f . . . . . . f f f f f f f 
            . . f . . . . . f f f f . . . . 
            . . f f . . . f f f f f f f f . 
            . . . f f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f f . f . . . . . . . 
            . . . . . f . . f . . . . . . . 
            . . . . . f . . . . . . . . . . 
            `)
    } else if (Hops_and_Paw.vy > 0) {
        Hops_and_Paw.setImage(img`
            . . . . . . . f . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . . . f f f f . . . . . . . . 
            . . . . f f f f . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . f . f f f f . . f . . . 
            . . . . f . f f f f f f f f f . 
            . . . . f . f . f f f f f f 5 f 
            . . . . . . . . f f f f f f f f 
            . . . . . . . . f . f . . . . . 
            . . . . . . . . f . f . . . . . 
            . . . . . . . . f . f f . . . . 
            `)
    } else if (Hops_and_Paw.x % 2 == 0) {
        Hops_and_Paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . f f f . 
            . . . . . . . . . . . . f f 5 f 
            f f f f f f f f f f f f f f f f 
            . . . . f f f f f f f f f f . . 
            . . . . f f f f f f f f f . . . 
            . . . . f f . . . . . f f . . . 
            . . . . f f . . . . . f f . . . 
            `)
    } else {
        Hops_and_Paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . f f f . 
            . . . . . . . . . . . . f f 5 f 
            f f f f f f f f f f f f f f f f 
            . . . . f f f f f f f f f f . . 
            . . . . f f f f f f f f f . . . 
            . . . . f . f . . . f . f . . . 
            . . . . f . f . . . f . f . . . 
            `)
    }
    if ((Hops_and_Paw.isHittingTile(CollisionDirection.Left) || Hops_and_Paw.isHittingTile(CollisionDirection.Right)) && Hops_and_Paw.vy >= 0) {
        Hops_and_Paw.vy = 0
        Hops_and_Paw.ay = 0
        Hops_and_Paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . f f . . 
            . . . . . . . . . . . f 5 f . . 
            . . . . . . . . . . . f f f . . 
            . . . . . . . . . . f f f f . . 
            . . . . . . . . . . . . f f f f 
            . . . . . . . . . . . . f f . . 
            . . . . . . . . . . . . f f f f 
            . . . . . . . f . . . . f f . . 
            . . . . . . . f . . . . f f . . 
            . . . . . . . f . . . . f f . . 
            . . . . . . . f . . . . f f f f 
            . . . . . . . f f . . . f f . . 
            . . . . . . . . f f f f f f f f 
            `)
    } else {
        Hops_and_Paw.ay = 350
    }
    if (Hops_and_Paw.vx < 0 || Hops_and_Paw.isHittingTile(CollisionDirection.Left)) {
        Hops_and_Paw.image.flipX()
        Hops_and_Paw.setImage(Hops_and_Paw.image)
    }
})
/**
 * Level selection
 */
game.onUpdate(function () {
    if (game_mode) {
    	
    } else {
        if (Hops_and_Paw.tileKindAt(TileDirection.Center, assets.tile`myTile18`)) {
            current_level = 1
            startLevel()
        } else if (Hops_and_Paw.tileKindAt(TileDirection.Center, assets.tile`myTile19`)) {
            current_level = 2
            startLevel()
        } else if (Hops_and_Paw.tileKindAt(TileDirection.Center, assets.tile`myTile20`)) {
            current_level = 3
            startLevel()
        } else if (Hops_and_Paw.tileKindAt(TileDirection.Center, assets.tile`myTile21`)) {
            current_level = 4
            startLevel()
        } else if (Hops_and_Paw.tileKindAt(TileDirection.Center, assets.tile`myTile22`)) {
            current_level = 5
            startLevel()
        } else if (Hops_and_Paw.tileKindAt(TileDirection.Center, assets.tile`myTile24`)) {
            controller.moveSprite(Hops_and_Paw, 200, 0)
        } else if (Hops_and_Paw.tileKindAt(TileDirection.Center, assets.tile`myTile25`)) {
            controller.moveSprite(Hops_and_Paw, 80, 0)
        } else if (Hops_and_Paw.tileKindAt(TileDirection.Center, assets.tile`myTile27`)) {
            current_level = 6
            startLevel()
        } else if (Hops_and_Paw.tileKindAt(TileDirection.Center, assets.tile`myTile32`)) {
            current_level = 9
        } else if (Hops_and_Paw.tileKindAt(TileDirection.Center, assets.tile`myTile33`)) {
            current_level = 10
        } else if (Hops_and_Paw.tileKindAt(TileDirection.Center, assets.tile`myTile34`)) {
            current_level = 11
        } else if (Hops_and_Paw.tileKindAt(TileDirection.Center, assets.tile`myTile35`)) {
            current_level = 12
        } else if (Hops_and_Paw.tileKindAt(TileDirection.Center, assets.tile`myTile36`)) {
            current_level = 13
        } else {
        	
        }
    }
})
game.onUpdate(function () {
    if (Hops_and_Paw.tileKindAt(TileDirection.Center, assets.tile`myTile37`)) {
        if (!(over_hogweed)) {
            info.changeLifeBy(-1)
            over_hogweed = true
        }
    } else {
        over_hogweed = false
    }
})
