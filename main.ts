input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.clearScreen()
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.showString("START")
    basic.clearScreen()
    basic.showLeds(`
        . # # . .
                # # # # .
                # # . . .
                # # # # .
                . # # . .
    `)
    basic.showLeds(`
        . # # . .
                # # # # .
                # # # # .
                # # # # .
                . # # . .
    `)
    basic.showLeds(`
        . # # # .
                # # # # #
                # # . # #
                . # . # .
                . . . . .
    `)
    basic.showLeds(`
        . # # # .
                # # # # #
                # # # # #
                . # # # .
                . . . . .
    `)
    basic.showLeds(`
        . # # . .
                # # # # .
                # # . . .
                # # # # .
                . # # . .
    `)
    basic.showLeds(`
        . # # . .
                # # # # .
                # # # # .
                # # # # .
                . # # . .
    `)
    basic.showLeds(`
        . # # . .
                # # # # .
                # # . . .
                # # # # .
                . # # . .
    `)
    basic.showLeds(`
        . # # . .
                # # # # .
                # # # # .
                # # # # .
                . # # . .
    `)
    basic.showLeds(`
        . # # . .
                # # # # .
                # # . . .
                # # # # .
                . # # . .
    `)
    basic.showLeds(`
        . # # . .
                # # # # .
                # # # # .
                # # # # .
                . # # . .
    `)
    basic.showLeds(`
        . . . . .
                . # . # .
                # # . # #
                # # # # #
                . # # # .
    `)
    basic.showLeds(`
        . . . . .
                . # # # .
                # # # # #
                # # # # #
                . # # # .
    `)
    basic.showLeds(`
        . # # . .
                # # # # .
                # # . . .
                # # # # .
                . # # . .
    `)
    basic.showLeds(`
        . # # . .
                # # # # .
                # # # # .
                # # # # .
                . # # . .
    `)
    basic.showLeds(`
        . # # . .
                # # # # .
                # # . . .
                # # # # .
                . # # . .
    `)
    basic.showLeds(`
        . # # . .
                # # # # .
                # # # # .
                # # # # .
                . # # . .
    `)
    basic.showLeds(`
        . # # . .
                # # # # .
                # # . . .
                # # # # .
                . # # . .
    `)
    basic.showLeds(`
        . # # . .
                # # # # .
                # # # # .
                # # # # .
                . # # . .
    `)
    basic.showLeds(`
        . # # . .
                # # # # .
                # # . . .
                # # # # .
                . # # . .
    `)
    basic.showLeds(`
        . # # . .
                # # # # .
                # # # # .
                # # # # .
                . # # . .
    `)
    basic.showLeds(`
        . # # . .
                # # # # .
                # # . . .
                # # # # .
                . # # . .
    `)
    basic.showIcon(IconNames.Ghost)
    basic.showLeds(`
        . . . . .
                . # # # .
                # . # . #
                # # # # #
                # # # # #
    `)
    basic.showLeds(`
        . . . . .
                . . . . .
                . # # # .
                # . # . #
                # # # # #
    `)
    basic.showLeds(`
        . . . . .
                . . . . .
                . . . . .
                . # # # .
                # . # . #
    `)
    basic.showLeds(`
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . # # # .
    `)
    basic.clearScreen()
    basic.showIcon(IconNames.Skull)
    basic.clearScreen()
    basic.showString("VICTORY")
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    basic.showString("PACMAN")
    basic.clearScreen()
})
