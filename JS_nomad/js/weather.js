const APIKEY = "25b5a734c3c114d02a513f365e352618"; 



function OnGeoSuccess (position) {
    const lat= position.coords.latitude; 
    const lon= position.coords.longitude; 
    console.log("You are at:"+lat+lon); 
    const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`; 
    console.log(url); 

}

function OnGeoFailure () {
    alert("Can't Find Your Location!"); 

}

navigator.geolocation.getCurrentPosition(OnGeoSuccess,OnGeoFailure); 