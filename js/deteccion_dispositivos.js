const d = document,
    n = navigator,
    ua = n.userAgent;

export function userDeviceInfo(id){
    const $id = d.getElementById(id),
        isMobile = {
            android : ()=> ua.match(/android/i),
            ios : ()=> ua.match(/iphone|ipad|ipod/i),
            windows : ()=> ua.match(/windows phone/i),
            any : function() { //acepta todos mientras sean un dispositivo móvil 
                return this.android()|| this.ios() || this.windows();
            }
        },
        isDesktop = {
            linux : ()=> ua.match(/linux/i),
            mac : ()=> ua.match(/mac os/i),
            windows : ()=> ua.match(/windows nt/i),
            any : function() { 
                return this.linux()|| this.mac() || this.windows();
            }
        },
        isBrowser = {
            chrome : ()=> ua.match(/chrome/i),
            safari : ()=> ua.match(/safari/i),
            firefox : ()=> ua.match(/firefox/i),
            opera : ()=> ua.match(/opera|opera mini/i),
            ie : ()=> ua.match(/msie|iemobile/i),
            edge : ()=> ua.match(/edge/i),
            any : function() { 
                return(
                    this.chrome() ||
                    this.safari() ||
                    this.firefox() ||
                    this.opera() ||
                    this.ie() ||
                    this.edge()
                );
            }
        };
    console.log(ua);
    // console.log(isMobile.android());

    $id.innerHTML = `
        <ul>
            <li>User Agent: <b> ${ua} </b></li>
            <li>Plataforma: <b> ${isMobile.any()? isMobile.any(): isDesktop.any()} </b></li> 
            <li>Navegador: <b> ${isBrowser.any()} </b></li> 
        </ul>
    `; //detecta si estamos en celular o computadora


    //Contenido exclusivo
    if(isBrowser.chrome()){
        $id.innerHTML += `<p><mark>Este contenido sólo se ve en Chrome</mark></p>`;
    }

    if(isBrowser.firefox()){
        $id.innerHTML += `<p><mark>Este contenido sólo se ve en Firefox</mark></p>`;
    }

    if(isDesktop.linux()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para linux</mark></p>`;
    }

    if(isDesktop.windows()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para windows</mark></p>`;
    }

    if(isDesktop.mac()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para mac</mark></p>`;
    }


    //Redirecciones
    if(isMobile.android()){
        // window.location.href = "https://www.facebook.com/";
    }
}