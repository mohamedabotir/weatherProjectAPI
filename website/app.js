/* Global Variables */


// Create a new date instance dynamically with JS
let d = new Date();
let Entry={};
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
const apiID="a175f84440755a2a5a3ff8f6f0af80ef";
let zipCode;
let url;
let feeling;
document.getElementById("generate").addEventListener("click",(e)=>{
let zipParameter=document.getElementById("zip");
let feelingParameter=document.getElementById("feelings");
zipCode=zipParameter.value;
feeling=feelingParameter.value;
url=`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiID}`;
console.log(url);
getData(url).then(function(data){
    postData("/all",{temp:data.temp,feeling:data.feeling,zip:data.zip,date:newDate});

}).then(()=>{
    updateUI("/getData");
});
});
async function getData(data){
const response=await fetch(data);
try{
    const recivedData=await response.json();
    Entry["temp"]=recivedData["main"]["temp"];
    Entry["zip"]=zipCode;
    Entry["feeling"]=feeling;
    return Entry;
}catch(error){
    console.log(error);
}
}
async function postData(url='',data={}){
    const response=await fetch(url,{
        method:'post',
        credentials:'same-origin',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    });
    try{
    const newData=response.json();
    return newData;
    }catch(error){
        console.error(error);
    }
}
    async function updateUI(url){
        const response=await fetch(url);
        try{
            const recivedData=await response.json();
document.getElementById("date").innerHTML=`<p>Date:${recivedData["date"]}</p>`;
document.getElementById("temp").innerHTML=`<p>Tempreture:${recivedData["temp"]}</p>`;
document.getElementById("content").innerHTML=`<p>Condition:${recivedData["feeling"]}</p>`;


        }catch(error){
            console.error(error);
        }

    }

