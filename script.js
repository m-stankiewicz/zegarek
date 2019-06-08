var actualTime=new Date();

var mainTimeData = {
    Godzina: actualTime.getHours()<10?'0'+actualTime.getHours() : actualTime.getHours(),
    Minuta: actualTime.getMinutes()<10?'0'+actualTime.getMinutes() : actualTime.getMinutes(),
    Sekunda: actualTime.getSeconds()<10?'0'+actualTime.getSeconds() : actualTime.getSeconds(),
    Dzien: actualTime.getDate()<10?'0'+actualTime.getDate() : actualTime.getDate(),
    Miesiac: actualTime.getMonth()<9?'0'+(actualTime.getMonth()+1) : (actualTime.getMonth()+1),
    Rok: actualTime.getFullYear()<10?'0'+actualTime.getFullYear() : actualTime.getFullYear(),
    updateTimer: function(){
        this.Godzina = actualTime.getHours()<10?'0'+actualTime.getHours() : actualTime.getHours();
        this.Minuta = actualTime.getMinutes()<10?'0'+actualTime.getMinutes() : actualTime.getMinutes();
        this.Sekunda = actualTime.getSeconds()<10?'0'+actualTime.getSeconds() : actualTime.getSeconds();
        this.Dzien = actualTime.getDate()<10?'0'+actualTime.getDate() : actualTime.getDate();
        this.Miesiac = actualTime.getMonth()<9?'0'+(actualTime.getMonth()+1) : (actualTime.getMonth()+1);
        this.Rok = actualTime.getFullYear()<10?'0'+actualTime.getFullYear() : actualTime.getFullYear();
    }
};
function timerData (year,month,day,hour,minute,second,milisecond)
{
    this.dayOfEvent = new Date(year, month , day , hour-1 , minute , second , milisecond);
    this.secondsToEvent = Math.floor((this.dayOfEvent-actualTime)/1000)+1
    this.Sekundy = this.secondsToEvent%60<10?'0'+this.secondsToEvent%60:this.secondsToEvent%60;
    this.Minuty = Math.floor(this.secondsToEvent/60)%60<10?'0'+Math.floor(this.secondsToEvent/60)%60:Math.floor(this.secondsToEvent/60)%60;
    this.Godziny = Math.floor(this.secondsToEvent/3600)%24<10?'0'+Math.floor(this.secondsToEvent/3600)%24:Math.floor(this.secondsToEvent/3600)%24;
    this.Dni = Math.floor(this.secondsToEvent/86400);
    this.isNotOneDay = this.Dni!=1;
    this.isMoreThanZero = this.secondsToEvent>0;
    this.updateTimer = function(){
        this.secondsToEvent = Math.floor((this.dayOfEvent-actualTime)/1000)+1
        this.Sekundy = this.secondsToEvent%60<10?'0'+this.secondsToEvent%60:this.secondsToEvent%60;
        this.Minuty = Math.floor(this.secondsToEvent/60)%60<10?'0'+Math.floor(this.secondsToEvent/60)%60:Math.floor(this.secondsToEvent/60)%60;
        this.Godziny = Math.floor(this.secondsToEvent/3600)%24<10?'0'+Math.floor(this.secondsToEvent/3600)%24:Math.floor(this.secondsToEvent/3600)%24;
        this.Dni = Math.floor(this.secondsToEvent/86400);
        this.isNotOneDay = this.Dni!=1;
        this.isMoreThanZero = this.secondsToEvent>0;
    }
};

var sessionTimeData = new timerData(2019, 6 , 10 , 9 , 0 , 0 , 0);
var app = new Vue({
    el: '#zegar',
    data: mainTimeData,
});

var app2 = new Vue({
    el: '#zegar2',
    data: sessionTimeData,
});

function changeDate()
{
    actualTime=new Date();
    sessionTimeData.updateTimer();
    mainTimeData.updateTimer();
};

setInterval(changeDate,1000);
