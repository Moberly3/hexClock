var seconds;
var minutes;
var hours;
var clockBackground;
var clockLine;

function Caller(){
    Clock();
    SixChar();
    Changes();
}


function Clock(){
    var date = new Date();
    seconds = date.getSeconds();
    minutes = date.getMinutes();
    hours = date.getHours();
    
}

function SixChar() {
    seconds <= 9 ? seconds = "0" + seconds : seconds = seconds;
    minutes <= 9 ? minutes = "0" + minutes : minutes = minutes;
    hours <= 9 ? hours = "0" + hours : hours = hours;
    clockBackground = "#" + hours + minutes + seconds;
    clockLine = "#" + seconds + minutes + hours;
}

function Changes(){
    document.getElementById('clock').innerHTML = clockBackground;
    document.body.style.backgroundColor = clockBackground;
    document.body.style.color = clockLine;
}


setInterval(Caller, 1000);