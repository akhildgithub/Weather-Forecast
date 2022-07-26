const locate = document.querySelector(".locate"),
  z1 = document.querySelector(".z1"),
  z2 = document.querySelector(".z2"),
  inputPart = document.querySelector(".head1"),
  infoTxt = inputPart.querySelector(".info-txt"),
  inputField = inputPart.querySelector("input"),
  locationBtn = inputPart.querySelector("button"),
  weatherPart = locate.querySelector(".report1"),
  wIcon = weatherPart.querySelector(".cloud");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sarturday"];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const API_KEY = '117bfe6be263d54afb55f47b46b6daf1';
let currentDate = new Date();
let cDay = currentDate.getDate();
let cHour = currentDate.getHours();
let cMinute = currentDate.getMinutes();
let month = currentDate.toLocaleString("default", { month: "long" });

//const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
inputPart.addEventListener("submit", (event) => {
  event.preventDefault();
  const address = search.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      getWeatherData1(data);
    });
});

function getWeatherData1(data) {
  
  let { lon, lat } = data.coord;

  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      
      showWeatherData(data);
    });
fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
)
.then((res) => res.json())
    .then((data) => {
      
      showWeatherData1(data);
    });
}
getWeatherData()
function getWeatherData() {
  navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
      
      showWeatherData(data);
    })
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
      
      showWeatherData1(data);
    })
  }
  
  )
}

function showWeatherData(data) {
  let { description,id } = data.current.weather[0];
  
  if(id == 800){
    wIcon.src = "clear.svg";
}else if(id >= 200 && id <= 232){
    wIcon.src = "storm.svg";  
}else if(id >= 600 && id <= 622){
    wIcon.src = "snow.svg";
}else if(id >= 701 && id <= 781){
    wIcon.src = "haze.svg";
}else if(id >= 801 && id <= 804){
    wIcon.src = "cloud.svg";
}else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
    wIcon.src = "rain.svg";
}

  document.querySelector(".temp1 span").innerHTML = `${data.current.temp}`;
  document.querySelector(".rep1 ").innerHTML = `${description}`;
  //document.querySelector(".humi2 ").innerHTML = `${data.current.humidity}`;
  //document.querySelector(".wind2  ").innerHTML = `${data.current.wind_speed}`;
  document.querySelector(".speed12 ").innerHTML = `${data.current.wind_speed}`;
  document.querySelector(" .humid").innerHTML = `${data.current.humidity}`;
  document.querySelector(".press").innerHTML = `${data.current.pressure}`;
  document.querySelector(".dewp").innerHTML = `${data.current.dew_point}`;
  document.querySelector(".uv").innerHTML = `${data.current.uvi}`;
  const sunrise = new Date(data.current.sunrise * 1000);
  const sunset = new Date(data.current.sunset * 1000);
  document.querySelector(".sunrise").innerHTML = `${("0"+sunrise.getHours()).slice(-2)}:${("0"+sunrise.getMinutes()).slice(-2)}`;
  document.querySelector(".sunset").innerHTML = `${sunset.getHours()}:${sunset.getMinutes()}`;
  document.querySelector(".date1").innerHTML = `${("0"+cDay).slice(-2)}`;
  document.querySelector(".month1").innerHTML = `${month}`;
  document.querySelector(".hour1").innerHTML = `${("0"+cHour).slice(-2)}`;
  document.querySelector(".minute1").innerHTML = `${("0"+cMinute).slice(-2)}`;
  document.querySelector(".high").innerHTML = `${data.current.feels_like}`;

  
  data.daily.forEach((day, idx) => {
    if (idx == 0) {
      
      
      document.querySelector(".day2").innerHTML = `${day.temp.max}`;
      document.querySelector(".night2").innerHTML = `${day.temp.min}`;
      document.querySelector(".morning").innerHTML = `${day.temp.morn}`;
      document.querySelector(".afternoon").innerHTML = `${day.temp.day}`;
      document.querySelector(".evening").innerHTML = `${day.temp.eve}`;
      document.querySelector(".night").innerHTML = `${day.temp.night}`;
      document.querySelector("#bottom5 span").innerHTML = `${day.temp.max}`;
      document.querySelector("#bot5 span").innerHTML = `${day.temp.min}`;
      document.querySelector(".clouds5").innerHTML = `${day.clouds}`;
    }
    else {
      
if(idx == 1){
  document.querySelector("#bottom6 span").innerHTML = `${day.temp.max}`;
  document.querySelector("#bot6 span").innerHTML = `${day.temp.min}`;
  document.querySelector(".date2").innerHTML = `${cDay+1}`;
  document.querySelector(".clouds6").innerHTML = `${day.clouds}`;
}
  else{
    if(idx == 2){
    document.querySelector("#bottom7 span").innerHTML = `${day.temp.max}`;
    document.querySelector("#bot7 span").innerHTML = `${day.temp.min}`;
    document.querySelector(".date3").innerHTML = `${cDay+2}`;
    document.querySelector(".clouds7").innerHTML = `${day.clouds}`;
  }
else
{if(idx == 3){
  document.querySelector("#bottom8 span").innerHTML = `${day.temp.max}`;
  document.querySelector("#bot8 span").innerHTML = `${day.temp.min}`;
  document.querySelector(".date4").innerHTML = `${cDay+3}`;
  document.querySelector(".clouds8").innerHTML = `${day.clouds}`;
}
  else{
    if(idx==4){
      document.querySelector("#bottom9 span").innerHTML = `${day.temp.max}`;
    document.querySelector("#bot9 span").innerHTML = `${day.temp.min}`;
    document.querySelector(".date5").innerHTML = `${cDay+4}`;
    document.querySelector(".clouds9").innerHTML = `${day.clouds}`;
    }else{
      if(idx==5){
        document.querySelector("#bottom10 span").innerHTML = `${day.temp.max}`;
    document.querySelector("#bot10 span").innerHTML = `${day.temp.min}`;
    document.querySelector(".date6").innerHTML = `${cDay+5}`;
    document.querySelector(".clouds10").innerHTML = `${day.clouds}`;
      }
      else{
        document.querySelector("#bottom11 span").innerHTML = `${day.temp.max}`;
    document.querySelector("#bot11 span").innerHTML = `${day.temp.min}`;
    document.querySelector(".date7").innerHTML = `${cDay+6}`;
    document.querySelector(".clouds11").innerHTML = `${day.clouds}`;
      }
    }
  }
}}
    }
  })
  


data.hourly.forEach((hour,idn) =>{

  if(idn==0){
    document.querySelector("#now").innerHTML = `${hour.temp}`;
    document.querySelector(".now").innerHTML = ("0"+cHour).slice(-2);
  }
  else{
    if(idn==1){
      document.querySelector("#now1").innerHTML = `${hour.temp}`;
      document.querySelector(".now1").innerHTML = ("0"+(cHour+idn)).slice(-2);    
    }else{
      if(idn==2){
        document.querySelector("#now2").innerHTML = `${hour.temp}`;
        document.querySelector(".now2").innerHTML = ("0"+(cHour+idn)).slice(-2);      
      }else{
        if(idn==3){
          document.querySelector("#now3").innerHTML = `${hour.temp}`;
          document.querySelector(".now3").innerHTML = ("0"+(cHour+idn)).slice(-2);        
        }else{
          if(idn==4){
            document.querySelector("#now4").innerHTML = `${hour.temp}`;
            document.querySelector(".now4").innerHTML = ("0"+(cHour+idn)).slice(-2);          
          }
          else{
            if(idn==5){
              document.querySelector("#now5").innerHTML = `${hour.temp}`;
              document.querySelector(".now5").innerHTML = ("0"+(cHour+idn)).slice(-2);          
            }
            else{
              if(idn==6){
                document.querySelector("#now6").innerHTML = `${hour.temp}`;
                document.querySelector(".now6").innerHTML = ("0"+(cHour+idn)).slice(-2);          
              }
            }
          }
        }
      }
    } 
  }
})

}

function showWeatherData1(data){
  document.querySelector(".place").innerHTML=`${data.name}, ${data.sys.country}`
  //document.querySelector(".fore3 span").innerHTML=`${data.name}, ${data.sys.country}`
  //document.querySelector(".place1").innerHTML=`${data.name}, ${data.sys.country}`
}

function myFunction1() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}