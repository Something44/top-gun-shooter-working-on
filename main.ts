function Spawn_Enemy () {
    Enemy_sprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c . . . . 
        . . . . . . c d d d d d c . . . 
        . . . . . . c c c c c d c . . . 
        . . . . . c 4 4 4 4 d c c . . . 
        . . . . c d 4 4 4 4 4 1 c . . . 
        . . . c 4 4 1 4 4 4 4 4 1 c . . 
        . . c 4 4 4 4 1 4 4 4 4 1 c c c 
        . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
        . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
        f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
        f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
        . f 4 4 4 4 1 4 4 4 4 c b c f f 
        . . f f f d 4 4 4 4 c d d c . . 
        . . . . . f f f f f c c c . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Enemy_sprite.setPosition(randint(5, 155), randint(5, 155))
    sprites.setDataString(Enemy_sprite, "State", Enemy_AI_states[randint(0, 2)])
    Enemy_AI_Statemachcine(Enemy_sprite)
}
function Attack (Emeny_clone: Sprite) {
	
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Player_Sprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
function Enemy_State_Attack (Enemy_Clone: Sprite) {
	
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f 1 1 f f . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . . f f 1 1 f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Player_Sprite, 0, -150)
    music.wawawawaa.play()
})
function Patrol (Emeny_clone: Sprite) {
	
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Player_Sprite.setImage(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Player_Sprite.setImage(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
})
function Enemy_Patrol_State (Enemy_Clone: Sprite) {
    let Attack_Max_Distance = 0
    let list: string[] = []
    timer.after(500, function () {
        console.log("Switching Patrol Directions")
    })
    if (Enemy_Patrol_Distance == list[0]) {
        Enemy_Patrol_Distance = list[1]
    } else {
        Enemy_Patrol_Distance = list[0]
    }
    if (Enemy_Patrol_Distance == list[0]) {
        Enemy_Clone.setVelocity(0, -1)
    } else {
        Enemy_Clone.setVelocity(0, 1)
    }
    if ((Player_Sprite.x - Enemy_sprite.x <= Chase_Max_Distance && Player_Sprite.x - Enemy_sprite.x > Attack_Max_Distance || Player_Sprite.y - Enemy_sprite.y <= Chase_Max_Distance) && Player_Sprite.y - Enemy_sprite.y > Attack_Max_Distance) {
        sprites.setDataString(Enemy_Clone, "State", list[2])
    } else if (Player_Sprite.x - Enemy_sprite.x <= Chase_Max_Distance || Player_Sprite.y - Enemy_sprite.y <= Chase_Max_Distance) {
        sprites.setDataString(Enemy_Clone, "State", list[2])
    } else {
    	
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Player_Sprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
function Enemy_AI_Statemachcine (Enemy_Clone: Sprite) {
    if (sprites.readDataString(Enemy_Clone, "State") == Enemy_AI_states[0]) {
        Enemy_Clone.sayText("Patrol")
        Patrol(Enemy_Clone)
    } else if (sprites.readDataString(Enemy_Clone, "State") == Enemy_AI_states[1]) {
        Enemy_Clone.sayText("Chase")
        Chase(Enemy_Clone)
    } else if (sprites.readDataString(Enemy_Clone, "State") == Enemy_AI_states[2]) {
        Enemy_Clone.sayText("Attack")
        Attack(Enemy_Clone)
    } else {
    	
    }
}
function Chase (Emeny_clone: Sprite) {
    Emeny_clone.follow(Player_Sprite)
    if (Player_Sprite.x - Emeny_clone.x <= Chase_Max_Distance) {
    	
    } else {
    	
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.spray, 100)
    Enemy_sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Enemy_sprite.destroy(effects.spray, 200)
})
let Enemy_Patrol_Distance = ""
let projectile: Sprite = null
let Enemy_sprite: Sprite = null
let Chase_Max_Distance = 0
let Enemy_AI_states: string[] = []
let Player_Sprite: Sprite = null
scene.setBackgroundImage(img`
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333353333333333333333333333333333333333333333333333333333333333333333333333333333333533333333333
    3333333333333333333333353333333333333333333333333333333333333333333555333333333333333333333333333333333533333333333333333333333333333333333333333335553333333333
    3333333333333333333333555333333333333333333333333333333333333333335555533333333333333333333333333333335553333333333333333333333333333333333333333355555333333333
    3333333333333333333333353333333333333333333333333333333333333333333555333333333333333333333333333333333533333333333333333333333333333333333333333335553333333333
    3333333333333333333333333333333333333333333333333111333333333333333535333333333333333333333333333333333333333333333333333333333331113333333333333335353333333333
    33333d11d3333333333333333333333333333333333333331111133333333333333333333333333333333d11d33333333333333333333333333333333333333311111333333333333333333333333333
    33331111113333333333333333333333333333333331133111111d3333333333333333333333333333331111113333333333333333333333333333333331133111111d33333333333333333333333333
    3331111111d33333333333333333333333333333331111d1111111133333333333333333333333333331111111d33333333333333333333333333333331111d111111113333333333333333333333333
    33311111111d11333333333333333333333333333d1111111111111d33333333333333333333333333311111111d11333333333333333333333333333d1111111111111d333333333333333333333333
    331111111111111333333333333333333333333d11111111111111111d3333333333333333333333331111111111111333333333333333333333333d11111111111111111d3333333333333333333333
    1d1111111111111d31113333333333333333333333333333333333333333333366633333333333311d1111111111111d3111333333333333333333333333333333333333333333336663333333333331
    1111111111111111111113333333333333333333333333333333333333333336776633333333331111111111111111111111133333333333333333333333333333333333333333367766333333333311
    1111111111166666111113333333333333533333333333333333333333333366777633333333331111111111111666661111133333333333335333333333333333333333333333667776333333333311
    111111111166777661111111d333333335553333333333333333333333333367777663333333d111111111111166777661111111d333333335553333333333333333333333333367777663333333d111
    3333333336677777663333333333333355555333333333333333333333333367777763333333333333333333366777776633333333333333555553333333333333333333333333677777633333333333
    3333333336777777763333333333333335553333333333333333333333333367777763333333333333333333367777777633333333333333355533333333333333333333333333677777633333333333
    3333333366777777766333333333333335353333333333333333333333333367777763333333333333333333667777777663333333333333353533333333333333333333333333677777633333333333
    3333333367777777776333333333333333333333333333333335333333333367777763333333333333333333677777777763333333333333333333333333333333353333333333677777633333333333
    3333333367777777776333366333333333333333333333333355533333333367777763333333333333333333677777777763333663333333333333333333333333555333333333677777633333333333
    3333333367777777776333677633333333333333333333333335333336633367777763333333333333333333677777777763336776333333333333333333333333353333366333677777633333333333
    3333333367777777776336677663333333333333333333333333333367763367777763333333333333333333677777777763366776633333333333333333333333333333677633677777633333333333
    3333333367777777776336777763333333333333333333333333333367763367777763333333333333333333677777777763367777633333333333333333333333333333677633677777633333333333
    3333333367777777776336777763333333333333333333333333333367763367777763333333333333333333677777777763367777633333333333333333333333333333677633677777633333333333
    6666333367777777776666777763333333333666666333333333333367763367777763333333333666663333677777777766667777633333333336666663333333333333677633677777633333333336
    7776633367777777777777777763333333336666666633333333333367763367777763336633336677766333677777777777777777633333333366666666333333333333677633677777633366333366
    7777633367777777777777777633333333366666666663333333333367763367777763367663366777776333677777777777777776333333333666666666633333333333677633677777633676633667
    7777763367777777777777776633333333366666666663333333333367763367777763367763367777777633677777777777777766333333333666666666633333333333677633677777633677633677
    7777763367777777776666666333333333666666666663333333333367763367777763367763367777777633677777777766666663333333336666666666633333333333677633677777633677633677
    7777776367777777776333333333333333666666666663333333333367776667777763677763367777777763677777777763333333333333336666666666633333333333677766677777636777633677
    7777776367777777776333333333333333666666666666333333333366777777777766677766667777777763677777777763333333333333336666666666663333333333667777777777666777666677
    7777776367777777776333666666666333666666666666333333333336677777777776677666677777777763677777777763336666666663336666666666663333333333366777777777766776666777
    7777776667777777776366677777776663666666666666333333333333666677777777777666677777777766677777777763666777777766636666666666663333333333336666777777777776666777
    7777776667777777776667777777777766666666666666333366666633333677777777777666677777777766677777777766677777777777666666666666663333666666333336777777777776666777
    7777776667777777776677777777777776666666666666366677777666333677777777776666677777777766677777777766777777777777766666666666663666777776663336777777777766666777
    7777777667777777776777777777777777666666666666667777777776633677777766666666677777777776677777777767777777777777776666666666666677777777766336777777666666666777
    7777777667777777766777777777777777666666666666677777777777663677777766666666677777777776677777777667777777777777776666666666666777777777776636777777666666666777
    7777777667777777767777777777777777766666666666777777777777766677777766666666677777777776677777777677777777777777777666666666667777777777777666777777666666666777
    7777777667777777667777777777777777766666666666777777777777766677777766666666677777777776677777776677777777777777777666666666667777777777777666777777666666666777
    7777777667777777677777777777777777776666666666777777777777766677777766666666677777777776677777776777777777777777777766666666667777777777777666777777666666666777
    7777777667777733333333777777777777776666666666777777773333333377777766666666677777777776677777333333337777777777777766666666667777777733333333777777666666666777
    777777766777333dddddd3333777777777776666666666777777333dddddd3333777666666666777777777766777333dddddd3333777777777776666666666777777333dddddd3333777666666666777
    7777777666333ddddddddddd33377777777766666666667777333ddddddddddd33376666666667777777777666333ddddddddddd33377777777766666666667777333ddddddddddd3337666666666777
    77777776633ddddddddddddddd3337777777666666666677733ddddddddddddddd3336666666677777777776633ddddddddddddddd3337777777666666666677733ddddddddddddddd33366666666777
    7777777333dddddddddddddddddd3333777766666666666333dddddddddddddddddd3333666667777777777333dddddddddddddddddd3333777766666666666333dddddddddddddddddd333366666777
    33777333ddddddddddddddddddddddd33333333333666333ddddddddddddddddddddddd33333333333777333ddddddddddddddddddddddd33333333333666333ddddddddddddddddddddddd333333333
    d33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33ddddd
    ddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333ddddddd
    ddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33dddddddddd
    ddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33dddddddddddd
    dddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddd
    dddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddd
    dddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddd
    dddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
Player_Sprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Player_Sprite)
Player_Sprite.setStayInScreen(true)
Enemy_AI_states = ["patrol", "chase", "attack"]
Chase_Max_Distance = 20
info.setLife(3)
game.onUpdateInterval(2000, function () {
    Spawn_Enemy()
})
forever(function () {
    music.playMelody("E D G F B A C5 B ", 110)
})
