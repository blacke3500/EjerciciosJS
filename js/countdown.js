const d = document;
let timer;


export function countdown(){    
    timer = setInterval(()=>{
        let finalDate = new Date("03/31/2023 12:01 AM");
        let actualDate = new Date();
        let remainingTime = finalDate - actualDate;
        let second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
        
        let days = Math.floor(remainingTime/ day),
         //"0" + days = Math.floor((remainingTime/ day)).slice(-2) en caso de que se desee agregar el 0 antes del número,
            hours = Math.floor((remainingTime % day)/ hour), //se usa el residuo para poder encontrar las horas de los días
            minutes = Math.floor((remainingTime % hour)/ minute),
            seconds = Math.floor((remainingTime % minute)/ second);
        
        if(remainingTime < 0){
            clearInterval(timer);
            d.querySelector(".countdown").innerHTML = `<h3>Feliz cumpleaños Oliver, de parte tuya :)</h3>`;
            return;
        }
        d.querySelector(".countdown").innerHTML = `<h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos y ${seconds} segundos</h3>`;
    }, 1000);
    
}