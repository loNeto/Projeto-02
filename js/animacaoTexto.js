var string = 'Seu momento registrado em um click';
var array = string.split('');
var timer;

function frameLooper(){
    if(array.length > 0){
        document.getElementById('digitando').innerHTML += array.shift();
    }else{
        clearTimeout(timer);
    }

    loopTimer = setTimeout('frameLooper()',70);
}
frameLooper();