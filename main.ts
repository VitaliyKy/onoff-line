basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        led.unplot(index - 1, 0)
        basic.pause(100)
    }
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 1)
        led.unplot(index - 1, 1)
        basic.pause(100)
    }
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 2)
        led.unplot(index - 1, 2)
        basic.pause(100)
    }
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 3)
        led.unplot(index - 1, 3)
        basic.pause(100)
    }
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 4)
        led.unplot(index - 1, 4)
        basic.pause(100)
    }
    basic.clearScreen()
})
