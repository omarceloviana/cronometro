"use strict"

var hh = 0;
var mm = 0;
var ss = 0;
var ms = 0;

var tempo = 20; //Quantos milésimos vale 1 segundo
var cron;

function start(){
    cron = setInterval(() => {timer(); }, tempo);

}

function pause(){
    clearInterval(cron);
}

function stop(){
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    ms = 0;
    document.getElementById('counter').innerText = '00:00:00:00';
}

function timer(){
    ms++;

    if(ms == 59){
        ms = 0;
        ss++;
        if(ss == 59){
            ss = 0;
            mm++;
        if(mm == 59){
            mm = 0;
            hh++;
        }
        }
    }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss) + ':' + (ms < 10 ? '0' + ms : ms);
    document.getElementById('counter').innerText = format;
}