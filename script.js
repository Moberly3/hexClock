function Time(){
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var clockBackground = "#" + seconds + hours + minutes;
    var clockBorder = "#" + hours + minutes + seconds;

    if(10 >= seconds){
        seconds = "0" + seconds;
    }

    if(10 >= minutes){
        minutes = "0" + minutes;
    }

    if(10 >= hours){
        hours = "0" + hours;
    }

    
    
}