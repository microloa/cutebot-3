let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
let left = strip.range(1, 1)
let right = strip.range(0, 1)

input.onButtonPressed(Button.A, function () {
    blinker(left, cuteBot.RGBLights.RGB_L)
})

input.onButtonPressed(Button.B, function () {
    blinker(right, cuteBot.RGBLights.RGB_R)
})

function blinker(sideTailight: neopixel.Strip, sideHeadlight: cuteBot.RGBLights) {
    for (let index = 0; index < 5; index++) {
        sideTailight.showColor(neopixel.colors(NeoPixelColors.Yellow))
        cuteBot.singleheadlights(sideHeadlight, 255, 255, 0)
        basic.pause(500)
        sideTailight.showColor(neopixel.colors(NeoPixelColors.Black))
        cuteBot.singleheadlights(sideHeadlight, 0, 0, 0)
        basic.pause(500)
    }
}
