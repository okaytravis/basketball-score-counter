let score = 0
let IR_Digi = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        . . . # .
        . . . # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(500)
    score = 0
    basic.showNumber(score)
    basic.pause(24000)
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showNumber(score)
    basic.showIcon(IconNames.Ghost)
    basic.showNumber(score)
    basic.showIcon(IconNames.Ghost)
    basic.showNumber(score)
    basic.showIcon(IconNames.Ghost)
    basic.showNumber(score)
    game.pause()
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    IR_Digi = pins.digitalReadPin(DigitalPin.P16)
    if (IR_Digi == 0) {
        score += 1
        music.playTone(131, music.beat(BeatFraction.Sixteenth))
        basic.showNumber(score)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
