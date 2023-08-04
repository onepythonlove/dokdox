
//엄격모드는 기본이지
'use strict';
//api 관련코드
fetch('https://api.open-meteo.com/v1/forecast?latitude=37.566&longitude=126.9784&hourly=temperature_2m,rain&current_weather=true')
.then ((response) => response.json ())
.then ((data) => { document.getElementById("seoul-t").innerHTML=
data['current_weather'].temperature
});
fetch('https://api.open-meteo.com/v1/forecast?latitude=37.566&longitude=126.9784&hourly=temperature_2m,rain&current_weather=true')
.then ((response) => response.json ())
.then ((data) => { document.getElementById("seoul-w").innerHTML=
data['current_weather'].windspeed
});
fetch('https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&hourly=temperature_2m,rain&current_weather=true')
.then ((response) => response.json ())
.then ((data) => { document.getElementById("new-t").innerHTML=
data['current_weather'].temperature
});
fetch('https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&hourly=temperature_2m,rain&current_weather=true')
.then ((response) => response.json ())
.then ((data) => { document.getElementById("new-w").innerHTML=
data['current_weather'].windspeed
});
fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m,rain&current_weather=true')
.then ((response) => response.json ())
.then ((data) => { document.getElementById("ja-t").innerHTML=
data['current_weather'].temperature
});
fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m,rain&current_weather=true')
.then ((response) => response.json ())
.then ((data) => { document.getElementById("ja-w").innerHTML=
data['current_weather'].windspeed;
});
//캐나다
fetch('https://api.open-meteo.com/v1/forecast?latitude=45.4112&longitude=-75.6981&hourly=temperature_2m,rain&current_weather=true')
.then ((response) => response.json ())
.then ((data) => { document.getElementById("ca-w").innerHTML=
data['current_weather'].windspeed;
});
fetch ('https://api.open-meteo.com/v1/forecast?latitude=45.4112&longitude=-75.6981&hourly=temperature_2m,rain&current_weather=true')
.then ((response) => response.json ())
.then ((data) => { document.getElementById("ca-t").innerHTML=
data['current_weather'].temperature;
});
//디자인 관련부분
function d(){
    document.getElementById("d").style.backgroundColor = "gray";
    document.getElementById("dx").style.backgroundColor = "gray";
    document.getElementById("dxg").style.backgroundColor = "gray";
    document.getElementById("ai").style.backgroundColor = "gray";
    document.getElementById("dd").style.background = "gray";
    document.getElementById("dxx").style.backgroundColor = "gray";
    document.getElementById("sex").style.backgroundColor  = "gray";
}
