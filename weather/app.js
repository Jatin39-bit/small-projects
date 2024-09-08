const apikey="HQVBEKP5B3B3D25A8LQKR4ABH"
const apiurl="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
const searchbox=document.querySelector(".searchinput");
const searchbtn=document.querySelector(".searchbtn");
const img=document.querySelector(".imgg")

async function checkweather(cityname){
    const response = await fetch(apiurl+ cityname+`?unitGroup=metric`+`&key=${apikey}`+`&contentType=json`);

    if(response.status==400){
        document.querySelector(".error").style.display="block";
    }
    else{
        var data = await response.json();

    document.querySelector(".cityname").innerHTML=data.address;
    document.querySelector(".humidity").innerHTML=data.currentConditions.humidity+"%";
    document.querySelector(".windspeed").innerHTML=data.currentConditions.windspeed+" km/h";
    document.querySelector(".degree").innerHTML=Math.round (data.currentConditions.temp)+"°c";

    if(data.currentConditions.conditions=="clear"){
    img.src="images/clear.png";
    }
    else if(data.currentConditions.conditions=="clouds","partly-cloudy"){
        img.src="images/clouds.png";
    }
    else if(data.currentConditions.conditions=="drizzle"){
        img.src="images/drizzle.png";
    }
    else if(data.currentConditions.conditions=="humidity"){
        img.src="images/humidity.png";
    }
    else if(data.currentConditions.conditions=="mist"){
        img.src="images/mist.png";
    }
    else if(data.currentConditions.conditions=="rain"){
        img.src="images/rain.png";
    }
    else if(data.currentConditions.conditions=="snow"){
        img.src="images/snow.png";
    }
    else if (data.currentConditions.conditions=="wind"){
        img.src="images/wind.png";
    }
    }
    
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})