"use strict";

var num = getNum(timer.value);
var tInterval = void 0;
var counter = 0;

function b1() {
    if (t1.value <= 1) {
        alert("Minimum Session Length Exceeded");
        t1.value = 1;
    } else {
        t1.value = t1.value - 1;
    }
    if (text.innerHTML === "Work Session") {
        timer.value = t1.value + ":" + 0 + 0;
        num = getNum(timer.value);
    }
}

function b2() {
    if (t1.value >= 30) {
        alert("Maximum Session Length Exceeded");
        t1.value = 30;
    } else {
        t1.value++;
    }

    if (text.innerHTML === "Work Session") {
        timer.value = t1.value + ":" + 0 + 0;
        num = getNum(timer.value);
    }
}

function b3() {
    if (t2.value <= 1) {
        alert("Minimum Break Length Exceeded");
        t2.value = 1;
    } else {
        t2.value = t2.value - 1;
    }

    if (text.innerHTML === "Break Session") {
        timer.value = t2.value + ":" + 0 + 0;
        num = getNum(timer.value);
    }
}

function b4() {
    if (t2.value >= 15) {
        alert("Maximum Break Length Exceeded");
        t2.value = 15;
    } else {
        t2.value++;
    }

    if (text.innerHTML === "Break Session") {
        timer.value = t2.value + ":" + 0 + 0;
        num = getNum(timer.value);
    }
}

function getNum(val) {
    if (val[0] < 1) {
        val = val[2].concat(val[3]);
    } else if (val[1] === ":") {
        val = +val[0] * 60 + +val[2].concat(val[3]);
    } else if (val[2] === ":") {
        val = +val[0].concat(val[1]) * 60 + +val[3].concat(val[4]);
    }
    return val;
}

function convert(s) {
    var mins = Math.floor(s / 60);
    var secs = s % 60;

    if (secs < 10) {
        return mins + ":" + 0 + secs;
    } else {
        return mins + ":" + secs;
    }
}

function run0() {
    if (timer.value[0] === "-") {
        stopFunc();
        resetFunc();
        switchFunc();
        audio0();
        startFunc();
    } else {
        counter++;
        timer.value = convert(num - counter);
    }
}

function startFunc() {
    disable();
    b5.value = "Resume";
    tInterval = setInterval(function () {
        run0();
    }, 1000);
}

function stopFunc() {
    clearInterval(tInterval);
    btn5.disabled = false;
    btn7.disabled = false;
}

function resetFunc() {
    stopFunc();
    enable();
    counter = 0;
    b5.value = "Start";
    if (text.innerHTML === "Work Session") {
        timer.value = t1.value + ":" + 0 + 0;
    } else {
        timer.value = t2.value + ":" + 0 + 0;
    }
}

function switchFunc() {
    if (text.innerHTML === "Work Session") {
        text.innerHTML = "Break Session";
        timer.value = t2.value + ":" + 0 + 0;
        num = getNum(timer.value);
    } else {
        text.innerHTML = "Work Session";
        timer.value = t1.value + ":" + 0 + 0;
        num = getNum(timer.value);
    }
}

var btn1 = document.getElementById("b1");
var btn2 = document.getElementById("b2");
var btn3 = document.getElementById("b3");
var btn4 = document.getElementById("b4");
var btn5 = document.getElementById("b5");
var btn7 = document.getElementById("b7");
var btn8 = document.getElementById("b8");
var btn9 = document.getElementById("b9");

var disable = function disable() {
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
};

var enable = function enable() {
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
    btn5.disabled = false;
    btn8.disabled = false;
};

var audio0 = function audio0() {
    var sound = new Audio("timer.mp3");
    sound.play();

    sound.onerror = function () {
        alert("An error has occured while attempting to play timer audio.");
    };
};