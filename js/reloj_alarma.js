const d = document;

export function reloj(iniciarReloj, mostrarReloj, detenerReloj){
    let clockTempo;

    d.addEventListener("click", (e)=>{
        if(e.target.matches(iniciarReloj)){
            clockTempo = setInterval(()=>{
                let horaExacta = new Date().toLocaleTimeString();
                d.querySelector(mostrarReloj).innerHTML = `<h3>${horaExacta}</h3>`
            },1000);
            
            
            e.target.disabled = true;
        }
        
        if(e.target.matches(detenerReloj)){
            clearInterval(clockTempo);
            d.querySelector(mostrarReloj).innerHTML = null;

            d.querySelector(iniciarReloj).disabled = false;
        }
    });
}

export function alarma(alarma, iniciarAlarma, detenerAlarma){
    let alarmaTempo;
    const $alarm =  d.createElement("audio");
    $alarm.src = alarma;

    d.addEventListener("click", (e)=>{
        if(e.target.matches(iniciarAlarma)){
            alarmaTempo = setTimeout(()=>{
                $alarm.play();
            },2000);

            e.target.disabled = true;
        }

        if(e.target.matches(detenerAlarma)){
            clearTimeout(alarmaTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(iniciarAlarma).disabled = false;
        }
    });
}