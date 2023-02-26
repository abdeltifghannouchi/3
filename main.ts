let X = 0
input.onButtonPressed(Button.A, function () {
    X = 0
    for (let index = 0; index < 10; index++) {
        basic.showNumber(X)
        basic.pause(1000)
        X += 1
    }
})
basic.forever(function () {
	
})
