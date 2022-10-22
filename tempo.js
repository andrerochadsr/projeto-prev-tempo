async function climaAtual() {
    //const id_slz = '3388368';
    const cidade = 'sao luis';
    const token = 'fa0345e1513193b62815809a6ec68648';
    const urlCid = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${token}`;
    const response = await fetch(urlCid);
    const data = await response.json();

    const zero = 273.15 // zero absoluto em celsius

    // temperatura atual
    const tempKelvinAtual = data['main']['temp']; 
    const tempCelsiusAtual = Math.round(tempKelvinAtual - zero); 
    document.querySelector('.temp').innerHTML += tempCelsiusAtual +"°";

    // Sensação Témmica
    const sensaKelvin = data['main']['feels_like'];
    const sensaCelsius = Math.round(sensaKelvin - zero);
    document.querySelector('.sensa').innerHTML += sensaCelsius +"°";


    // humidade
    const humi = data['main']['humidity'];
    document.querySelector('.humidade').innerHTML += humi + "%";

}
climaAtual()


function getHour() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    if (hour<10) hour = '0'+hour;
    if (minute<10) minute = '0'+minute;
    if (second<10) second = '0'+second;

    var tempo = hour+":"+minute+":"+second;

    document.querySelector(".hora").innerHTML = tempo;
}

function showHour() {
    setInterval(getHour, 1000);
}

showHour()

