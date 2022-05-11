radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
    }
})
radio.setGroup(1)
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(0, 30)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(30, 30)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(30, 0)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        cuteBot.stopcar()
    }
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 15) {
        cuteBot.stopcar()
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        music.playMelody("D D D D D D D D ", 120)
    }
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) > 15) {
    	
    }
})
