export default function hamburgerMenu(panelBtn, panel, menuLink){ //usamos export para poder usar el código en cualquier otro proyecto
    //Delegación de eventos
    const d = document;


    d.addEventListener("click",(e)=>{
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){ //esto sirve para que se active cuando se toca al botón o a cualquier elemento dentro del botón
            d.querySelector(panel).classList.toggle("is-active"); //al presionar el botón se intercambia la clase is-active para esconder o mostrar el menú
            d.querySelector(panelBtn).classList.toggle("is-active"); //al presionar el botón se intercambia la clase is-active para activa la animación del botón
        }

        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active"); //en este caso no usamos toggle
            d.querySelector(panelBtn).classList.remove("is-active");
        }

    });
}
