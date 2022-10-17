const d = document,
    n = navigator;

export function geolocalizacion(posicion,maplink){
    const $posicion = d.getElementById(posicion),
        $maplink = d.getElementById(maplink);
    
    n.geolocation.getCurrentPosition((position)=>{
        const latitud = position.coords.latitude,
            longitud = position.coords.longitude,
            presicion = position.coords.accuracy;
        
        $posicion.innerHTML = `
            <p>Tu posición actual es: </p>
            <ul>
                <li>Latitud: <b>${latitud}</b></li>
                <li>Longitud: <b>${longitud}</b></li>
                <li>Presición: <b>${presicion}</b> metros</li>
            </ul>
        `

        $maplink.href = `https://www.google.com.mx/maps/@${latitud},${longitud},20z`
        $maplink.textContent = 'Ver en GoogleMaps';
    },

    (err)=>{ //err
        $posicion.innerHTML = `<p><mark>Error : ${err.code}: ${err.message}</mark></p>`; 
        console.log(`Error : ${err.code}: ${err.message}`);
    },

    {  //options
        enableHighAccuracy : true,
        timeout: 5000,
        maximumAge: 0  //evita que se guarden en cache las referencias anteriores
    });
}