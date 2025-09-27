const apiKey = "f0d24b3b9e8d6e973ee98d0db7113601";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather"
    const input = document.getElementById("cityName");
    const btn = document.getElementById("btn");
    btn.addEventListener("click" ,async()=>{
        const city = input.value.trim();
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        let data = await response.json();
        console.log(data);
        //invalied data
        if(data.cod !==200){
            document.querySelector(".city").innerHTML = "city not found";
            document.querySelector(".temp").innerHTML = "--";
            document.querySelector(".humudity").innerHTML = "--%";
            document.querySelector(".wind").innerHTML = "--km/h";
            //  clear input field value
            input.value = "";
            return;
        }
        //valid data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp;
        document.querySelector(".humudity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";
        //  clear input field value
        input.value = "";
});