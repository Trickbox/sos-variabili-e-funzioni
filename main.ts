input.onButtonPressed(Button.A, function () {
    letteraS()
    letteraO()
    letteraS()
})
function letteraO () {
    // lettera O
    for (let index = 0; index < 3; index++) {
        // punto lungo
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(pausaLunga)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(pausaLunga)
    }
}
function letteraS () {
    // lettera S
    for (let index = 0; index < 3; index++) {
        // punto breve
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(pausaBreve)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(pausaBreve)
    }
}
let pausaLunga = 0
let pausaBreve = 0
pausaBreve = 200
pausaLunga = 600
basic.forever(function () {
	
})
