var button=document.querySelector('.button')
var inputValue=document.querySelector('.inputValue')
var city=document.querySelector('#city')
var date=document.querySelector('#date')
var tem=document.querySelector('#temp')
var button=document.querySelector('#btn')
var desc=document.querySelector('#description')
var feel=document.querySelector('#feel')
var hum=document.querySelector('#hum')
var wdf=document.querySelector('#wdf')
var dt1=document.querySelector('#dt1')
var dt2=document.querySelector('#dt2')
var dt3=document.querySelector('#dt3')
var dt4=document.querySelector('#dt4')
var dt5=document.querySelector('#dt5')
var dt6=document.querySelector('#dt6')
var dt7=document.querySelector('#dt7')
var mx1=document.querySelector('#mx1')
var mx2=document.querySelector('#mx2')
var mx3=document.querySelector('#mx3')
var mx4=document.querySelector('#mx4')
var mx5=document.querySelector('#mx5')
var mx6=document.querySelector('#mx6')
var mx7=document.querySelector('#mx7')
var mn1=document.querySelector('#mn1')
var mn2=document.querySelector('#mn2')
var mn3=document.querySelector('#mn3')
var mn4=document.querySelector('#mn4')
var mn5=document.querySelector('#mn5')
var mn6=document.querySelector('#mn6')
var mn7=document.querySelector('#mn7')
var hd1=document.querySelector('#hd1')
var hd2=document.querySelector('#hd2')
var hd3=document.querySelector('#hd3')
var hd4=document.querySelector('#hd4')
var hd5=document.querySelector('#hd5')
var hd6=document.querySelector('#hd6')
var hd7=document.querySelector('#hd7')
var ds1=document.querySelector('#ds1')
var ds2=document.querySelector('#ds2')
var ds3=document.querySelector('#ds3')
var ds4=document.querySelector('#ds4')
var ds5=document.querySelector('#ds5')
var ds6=document.querySelector('#ds6')
var ds7=document.querySelector('#ds7')

var ln,lt,iconid;

window.addEventListener("load",()=>{
   

    if(navigator.geolocation){var lon;var lat;
        navigator.geolocation.getCurrentPosition(position=>{
        lon=position.coords.longitude;
        lat=position.coords.latitude;
        

        fetch('http://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=minutely,hourly&units=metric&appid=20bb0e7b12adfffa0453590bfee12276')
        .then(response =>response.json())
        .then(data =>{console.log(data)
        var des=data.current.weather[0].description;
        desc.textContent=des.toUpperCase();
        feel.textContent=data.current.feels_like+" °C";
        hum.textContent=data.current.humidity+"%";
        wdf.textContent=data.current.wind_speed+"m/s";

        var a=(new Date(data.current.dt*1000-(data.timezone_offset*1000)));
        a=a.toDateString();date.textContent=a;

        a=(new Date(data.daily[1].dt*1000-(data.timezone_offset*1000)));
        dt1.textContent=a.toDateString();
        a=(new Date(data.daily[2].dt*1000-(data.timezone_offset*1000)));
        dt2.textContent=a.toDateString();
        a=(new Date(data.daily[3].dt*1000-(data.timezone_offset*1000)));
        dt3.textContent=a.toDateString();
        a=(new Date(data.daily[4].dt*1000-(data.timezone_offset*1000)));
        dt4.textContent=a.toDateString();
        a=(new Date(data.daily[5].dt*1000-(data.timezone_offset*1000)));
        dt5.textContent=a.toDateString();
        a=(new Date(data.daily[6].dt*1000-(data.timezone_offset*1000)));
        dt6.textContent=a.toDateString();
        a=(new Date(data.daily[7].dt*1000-(data.timezone_offset*1000)));
        dt7.textContent=a.toDateString();
        
        mx1.textContent=data.daily[1].temp.max;
        mx2.textContent=data.daily[2].temp.max;
        mx3.textContent=data.daily[3].temp.max;
        mx4.textContent=data.daily[4].temp.max;
        mx5.textContent=data.daily[5].temp.max;
        mx6.textContent=data.daily[6].temp.max;
        mx7.textContent=data.daily[7].temp.max;

        mn1.textContent=data.daily[1].temp.min;
        mn2.textContent=data.daily[2].temp.min;
        mn3.textContent=data.daily[3].temp.min;
        mn4.textContent=data.daily[4].temp.min;
        mn5.textContent=data.daily[5].temp.min;
        mn6.textContent=data.daily[6].temp.min;
        mn7.textContent=data.daily[7].temp.min;

        hd1.textContent=data.daily[1].humidity+"%";
        hd2.textContent=data.daily[2].humidity+"%";
        hd3.textContent=data.daily[3].humidity+"%";
        hd4.textContent=data.daily[4].humidity+"%";
        hd5.textContent=data.daily[5].humidity+"%";
        hd6.textContent=data.daily[6].humidity+"%";
        hd7.textContent=data.daily[7].humidity+"%";

        ds1.textContent=data.daily[1].weather[0].description.toUpperCase();
        ds2.textContent=data.daily[2].weather[0].description.toUpperCase();
        ds3.textContent=data.daily[3].weather[0].description.toUpperCase();
        ds4.textContent=data.daily[4].weather[0].description.toUpperCase();
        ds5.textContent=data.daily[5].weather[0].description.toUpperCase();
        ds6.textContent=data.daily[6].weather[0].description.toUpperCase();
        ds7.textContent=data.daily[7].weather[0].description.toUpperCase();

        iconid=data.current.weather[0].icon;
        document.getElementById("imgs").src="http://openweathermap.org/img/wn/"+iconid+"@2x.png";


        fetch('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid=20bb0e7b12adfffa0453590bfee12276')
        .then(response =>response.json())
        .then(data =>{console.log(data)
            var ct=data.name;city.textContent=ct;
            temp.textContent=data.main.temp+" °C"})
    })
   })}})


document.getElementById('btn').addEventListener("click",function(){
   fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=20bb0e7b12adfffa0453590bfee12276')
   .then(response =>response.json())
   .then(data =>{console.log(data)
    

    var temp=data.main.temp;lt=data.coord.lat;ln=data.coord.lon;
    var ct=data.name;city.textContent=ct;
   
    
   
   tem.textContent=temp+" °C";
   fetch('http://api.openweathermap.org/data/2.5/onecall?lat='+lt+'&lon='+ln+'&exclude=minutely,hourly&units=metric&appid=20bb0e7b12adfffa0453590bfee12276')
   .then(response =>response.json())
   .then(data =>{console.log(data)

    desc.textContent=data.current.weather[0].description.toUpperCase();
    feel.textContent=data.current.feels_like+" °C";
        hum.textContent=data.current.humidity+"%";
        wdf.textContent=data.current.wind_speed+"m/s";

    var a=(new Date(data.current.dt*1000-(data.timezone_offset*1000)));
    a=a.toDateString();date.textContent=a;

    a=(new Date(data.daily[1].dt*1000-(data.timezone_offset*1000)));
    dt1.textContent=a.toDateString();
    a=(new Date(data.daily[2].dt*1000-(data.timezone_offset*1000)));
        dt2.textContent=a.toDateString();
        a=(new Date(data.daily[3].dt*1000-(data.timezone_offset*1000)));
        dt3.textContent=a.toDateString();
        a=(new Date(data.daily[4].dt*1000-(data.timezone_offset*1000)));
        dt4.textContent=a.toDateString();
        a=(new Date(data.daily[5].dt*1000-(data.timezone_offset*1000)));
        dt5.textContent=a.toDateString();
        a=(new Date(data.daily[6].dt*1000-(data.timezone_offset*1000)));
        dt6.textContent=a.toDateString();
        a=(new Date(data.daily[7].dt*1000-(data.timezone_offset*1000)));
        dt7.textContent=a.toDateString();
        
        mx1.textContent=data.daily[1].temp.max;
        mx2.textContent=data.daily[2].temp.max;
        mx3.textContent=data.daily[3].temp.max;
        mx4.textContent=data.daily[4].temp.max;
        mx5.textContent=data.daily[5].temp.max;
        mx6.textContent=data.daily[6].temp.max;
        mx7.textContent=data.daily[7].temp.max;

        mn1.textContent=data.daily[1].temp.min;
        mn2.textContent=data.daily[2].temp.min;
        mn3.textContent=data.daily[3].temp.min;
        mn4.textContent=data.daily[4].temp.min;
        mn5.textContent=data.daily[5].temp.min;
        mn6.textContent=data.daily[6].temp.min;
        mn7.textContent=data.daily[7].temp.min;

        hd1.textContent=data.daily[1].humidity+"%";
        hd2.textContent=data.daily[2].humidity+"%";
        hd3.textContent=data.daily[3].humidity+"%";
        hd4.textContent=data.daily[4].humidity+"%";
        hd5.textContent=data.daily[5].humidity+"%";
        hd6.textContent=data.daily[6].humidity+"%";
        hd7.textContent=data.daily[7].humidity+"%";

        ds1.textContent=data.daily[1].weather[0].description.toUpperCase();
        ds2.textContent=data.daily[2].weather[0].description.toUpperCase();
        ds3.textContent=data.daily[3].weather[0].description.toUpperCase();
        ds4.textContent=data.daily[4].weather[0].description.toUpperCase();
        ds5.textContent=data.daily[5].weather[0].description.toUpperCase();
        ds6.textContent=data.daily[6].weather[0].description.toUpperCase();
        ds7.textContent=data.daily[7].weather[0].description.toUpperCase();

        iconid=data.current.weather[0].icon;
        document.getElementById("imgs").src="http://openweathermap.org/img/wn/"+iconid+"@2x.png";

})
})})