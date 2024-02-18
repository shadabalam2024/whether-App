const cityname=document.getElementById('cityname')
const search=document.getElementById('searchbutton')
const image=document.getElementById('image')
const temp=document.getElementById('t')
const humidity=document.getElementById('h')
const windspeed=document.getElementById('w')
const sky=document.getElementById('sky')


async function checkwhether(city) 
{
    const api='d6d505a238e4dd3760049e27a1c28603'
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
    const whether_data=await fetch(`${url}`).then
    (response=>response.json())
    console.log(whether_data);
    temp.innerHTML=`${Math.round(whether_data.main.temp - 273)}℃`
    humidity.innerHTML=`${whether_data.main.humidity}%`
    windspeed.innerHTML=`${whether_data.wind.speed}km/hr`
    sky.innerHTML=`${whether_data.weather[0].description}`

    switch (whether_data.weather[0].main) {
        case 'Clouds':
            image.src='cloud.png'
            break
        case 'Clear':
            image.src='clear.png'
            break
        case 'Mist':
            image.src='mist.png'
            break
        case 'Rain':
            image.src='rain.png'
            break
        case 'Snow':
            image.src='snow.png'
            break
        case 'Smoke':
            image.src='mist.png'
        case 'Haze':
            image.src='mist.png'
            break
            
    }
    
}

search.addEventListener('click', ()=>{
    checkwhether(cityname.value);
});
