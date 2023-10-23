input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.Heart)
    basic.turnRgbLedOff()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    basic.showNumber(storage.getNumber(StorageSlots.s1))
    basic.showNumber(storage.getNumber(StorageSlots.s2))
    if (storage.getNumber(StorageSlots.s1) == storage.getNumber(StorageSlots.s2)) {
        basic.setLedColor(basic.rgb(0, 60, 0))
    }
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.turnRgbLedOff()
    storage.putNumber(StorageSlots.s1, randint(1, 6))
    basic.showNumber(storage.getNumber(StorageSlots.s1), 150)
    storage.putNumber(StorageSlots.s2, randint(1, 6))
    basic.showNumber(storage.getNumber(StorageSlots.s2), 100)
    if (storage.getNumber(StorageSlots.s1) == storage.getNumber(StorageSlots.s2)) {
        basic.setLedColor(basic.rgb(0, 60, 0))
    }
    if (storage.getNumber(StorageSlots.s1) == 2 && storage.getNumber(StorageSlots.s2) == 1) {
        basic.showLeds(`
            . # # . .
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    if (storage.getNumber(StorageSlots.s1) == 1 && storage.getNumber(StorageSlots.s2) == 2) {
        basic.showLeds(`
            . # # . .
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
