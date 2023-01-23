def on_button_pressed_a():
    for index in range(5):
        right.show_color(neopixel.colors(NeoPixelColors.YELLOW))
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 255, 0)
        basic.pause(500)
        right.show_color(neopixel.colors(NeoPixelColors.BLACK))
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
        basic.pause(500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def blinker():
    pass
right: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
left = strip.range(0, 1)
right = strip.range(1, 1)