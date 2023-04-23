robobit.select_model(RBModel.Mk3)
loops.everyInterval(500, function () {
    for (let index = 0; index <= 4; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - index)
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
    robobit.go(RBDirection.Forward, 40)
    robobit.go(RBDirection.Forward, 55)
    robobit.go(RBDirection.Forward, 70)
    robobit.goms(RBDirection.Forward, 100, 400)
    robobit.stop(RBStopMode.Coast)
})
basic.forever(function () {
	
})
