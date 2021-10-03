input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(10)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(10)
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # . # #
        . . # . .
        . . # . .
        . # # # .
        # . . . #
        `)
})
basic.showIcon(IconNames.Happy)
