function Clock(){
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var backgrnd = document.querySelector("body");

    if(10 >= seconds){
        seconds = "0" + seconds;
    }

    if(10 >= minutes){
        minutes = "0" + minutes;
    }

    if(10 >= hours){
        hours = "0" + hours;
    }

    var clockBackground = "#" + seconds + hours + minutes;
    var clockBorder = "#" + hours + minutes + seconds;

    backgrnd.style.backgroundColor = "#"+clockBackground;
    document.getElementById('clock').innerHTML = clockBackground;
    document.body.style.backgroundColor = clockBackground;
    setTimeout(Clock, 1000);
}
Clock();