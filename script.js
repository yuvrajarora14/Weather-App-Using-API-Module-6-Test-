const inputlocation = document.getElementById('input-location');
const inputaccesstoken = document.getElementById('input-access-token');
const locationwarning = document.getElementById('location-warnings');
const accesswarning = document.getElementById('access-token-warnings');

function checkwarnings(a,b) 
{
    let error = false;
    if(a==='')
    {
        b.innerHTML = 'Input Incorrect';
        error = true;
    }
    else if(a.length < 4)
    {
        b.innerHTML = 'Length was too short!';
        error = true;
    }
    else
    {
        b.innerHTML = '';
    }

    return error;
}
/* API Fetch Process*/

function validate() {
    const inputLocation = document.getElementById("input-location");
    const acesskey = document.getElementById("input-access-token");
  
    if (inputLocation.value !== "" && acesskey.value !== "") {
      const loc = document.getElementById("input-location").value;
      const token = "NCB8JKE9S4EUUS4ZBUL7T8QZS";
  
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=us&key=${token}&units=metric&contentType=json`;
      console.log(url);
      async function getData(url) {
        const responce = await fetch(url);
        data = await responce.json();
        console.log(data);
        console.log(data.address);
        console.log(document.getElementsByClassName("common"));
        
        
        document.getElementsByClassName(
          "common"
        )[0].innerText = `Location: ${data.resolvedAddress}`;
        
        
        document.getElementsByClassName(
          "common"
        )[1].innerHTML = `Lat: ${data.latitude}`;              
        
        
        document.getElementsByClassName(
            "common"
        )[2].innerText = `Long: ${data.longitude}`;
          
        
        document.getElementsByClassName(
          "common"
        )[3].innerText = `TimeZone: ${data.timezone}`;
        
        
        document.getElementsByClassName(
          "common"
        )[4].innerText = `WindSpeed: ${data.currentConditions.windspeed}`;
        
        
        document.getElementsByClassName(
          "common"
        )[5].innerText = `Pressure: ${data.currentConditions.pressure}`;
        
        
        document.getElementsByClassName(
          "common"
        )[6].innerText = `Humidity: ${data.currentConditions.humidity}`;
        
        
        document.getElementsByClassName(
          "common"
        )[7].innerText = `Wind Direction: ${data.currentConditions.winddir}`;
        
        
        document.getElementsByClassName(
          "common"
        )[8].innerText = `UV Index: ${data.currentConditions.uvindex}`;
        
        
        document.getElementsByClassName(
          "common"
        )[9].innerText = `Feels Like: ${data.currentConditions.feelslike}`;

        
        document.getElementsByClassName(
            "common"
          )[10].innerText = `Visibility: ${data.currentConditions.visibility}`;


          document.getElementsByClassName(
            "common"
          )[11].innerText = `Conditions: ${data.currentConditions.conditions}`;


          document.getElementsByClassName(
            "common"
          )[12].innerText = `Sunrise Timing: ${data.currentConditions.sunrise}`;


          document.getElementsByClassName(
            "common"
          )[13].innerText = `Icon: ${data.currentConditions.icon}`;


          document.getElementsByClassName(
            "common"
          )[14].innerText = `Description: ${data.description}`;


          document.getElementsByClassName(
            "common"
          )[15].innerText = `Current Temperature: ${(data.currentConditions.temp-32) / 1.8}`;
      }


      getData(url);
    }
}

function submit(value) {
    if(inputaccesstoken.value==='NCB8JKE9S4EUUS4ZBUL7T8QZS'){
        const error1 = checkwarnings(inputlocation.value, locationwarning);
        const error2 = checkwarnings(inputaccesstoken.value, accesswarning);
        return validate();
    }
    else{
        alert('access key is incorrect');
    }
}
  