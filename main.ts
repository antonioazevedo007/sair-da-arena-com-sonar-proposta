basic.forever(function () {
    if (maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14) > 15) {
        // Alguns Maqueen não seguem em frente com este comando. Uns derivam para a esquerda, outros para a direita. Poderá ser necessário ajustar as velocidades de cada motor em separado. Explicar/sugerir isso aos alunos.
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 150)
    } else {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 120)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 120)
        // Ajustar velocidade dos motores e/ou tempo de movimento para que o Maqueen percorra ≈90˚ (∆s=vx∆t).
        // A distância e a viragem deve ser tal que mantenha o Maqueen no centro do "corredor" final.
        basic.pause(500)
        if (maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14) < 15) {
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 120)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 120)
            // Ajustar velocidade dos motores e/ou tempo de movimento para que o Maqueen percorra ≈180˚ (∆s=vx∆t).
            basic.pause(1000)
        }
    }
})
