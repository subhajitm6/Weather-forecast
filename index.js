function getdata(){
    const city=search.value;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '888b101381msha49f6b9c3f46c1ap12d1d8jsn8b191c31a8fc',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(res=>{
        console.log(res);
        temp.innerHTML=res.temp;
        ws.innerHTML=res.wind_speed;
        hmdty.innerHTML=res.humidity;

    })
	.catch(err => console.error(err));
}