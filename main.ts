radio.onReceivedNumber(function (receivedNumber) {
    if (true) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.A, function () {
    number += 1
})
input.onButtonPressed(Button.B, function () {
    number += -1
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(number)
})
let number = 0
radio.setGroup(1)
number = 0
basic.forever(function () {
	
})
