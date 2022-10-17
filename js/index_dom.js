import hamburgerMenu from "./menu_hamburguesa.js";
import { reloj,alarma } from "./reloj_alarma.js";
import { eventosTeclado, moveBall } from "./eventos-teclado.js";
import { countdown } from "./countdown.js";
import { btnTop } from "./buton_top.js";
import { darkLightTheme } from "./buton_dark_light.js";
import { responsiveMedia } from "./objeto_responsive.js";
import { responsiveTester } from "./prueba_responsive.js";
import { userDeviceInfo } from "./deteccion_dispositivos.js";
import { connectionInfo } from "./deteccion-conexion.js";
import { testWebCam } from "./deteccion_camara_web.js";
import { geolocalizacion } from "./geolocalizacion.js";
import { searchFilters } from "./filtro_busqueda.js";
import { raffleWinner } from "./sorteo.js";



const d = document; //trabajamos con todo el dom al usar el selector document

d.addEventListener("DOMContentLoaded", (e)=>{ //cargamos el menú de hamburguesa al cargar la página
    hamburgerMenu(".panel-btn",".panel",".menu a");
    reloj("#iniciar-reloj","#mostrar-reloj","#detener-reloj");
    alarma("assets/alarma.mp3","#iniciar-alarma","#detener-alarma");
    eventosTeclado(e);
    countdown();
    btnTop(".btn-top");
    responsiveMedia(
        "youtube", 
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/watch?v=SzpESn7iO10" target="_blank" rel="noopener">Ver Vídeo</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/SzpESn7iO10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia(
        "gmaps", 
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/NVRR7P2awBH8kh4J6" target="_blank" rel="noopener">Ver Mapa</a>`, 
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60239.71972814682!2d-98.9364224!3d19.3265664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1e50790a6149%3A0x64d4816d97d77b09!2sPlaza%20Sendero%20Ixtapaluca!5e0!3m2!1ses-419!2smx!4v1665441172294!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    testWebCam("video");
    geolocalizacion("posicion","map-link");
    searchFilters(".card-filter", ".card");
    raffleWinner("#ganador-btn", ".lenguaje");
});

d.addEventListener("keydown", (e=>{
    eventosTeclado(e);
    moveBall(e, ".circulo", ".rectangulo");
}));

darkLightTheme(".btn-dark-light", "darkTheme"); 
connectionInfo();