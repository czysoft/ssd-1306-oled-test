input.onButtonPressed(Button.A, function () {
    czyminode.i2c_ssd1306oledDrawLine(
    60,
    0,
    0,
    127,
    63,
    true,
    true
    )
    czyminode.i2c_ssd1306oledDrawLine(
    60,
    127,
    0,
    0,
    63,
    true,
    true
    )
    czyminode.i2c_ssd1306oledDrawCircle(
    60,
    64,
    32,
    32,
    true,
    true
    )
})
input.onButtonPressed(Button.AB, function () {
    y = 0
    for (let 值 = 0; 值 <= 63; 值++) {
        czyminode.i2c_ssd1306oledPixel(
        60,
        值,
        y,
        true,
        true
        )
        y += 1
    }
    for (let 值 = 0; 值 <= 63; 值++) {
        czyminode.i2c_ssd1306oledPixel(
        60,
        值,
        y,
        true,
        true
        )
        y += -1
    }
    y = 32
    for (let 值 = 0; 值 <= 63; 值++) {
        czyminode.i2c_ssd1306oledPixel(
        60,
        值,
        y,
        true,
        true
        )
    }
    for (let 值 = 0; 值 <= 63; 值++) {
        czyminode.i2c_ssd1306oledPixel(
        60,
        32,
        值,
        true,
        true
        )
    }
})
input.onButtonPressed(Button.B, function () {
    czyminode.i2c_ssd1306oledPixel(
    60,
    64,
    32,
    true,
    true
    )
    basic.pause(100)
    czyminode.i2c_ssd1306oledClear(60)
})
let y = 0
czyminode.i2c_ssd1306oledInit(60)
czyminode.i2c_ssd1306oledClear(60)
