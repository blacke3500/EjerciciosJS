const d = document;

export function responsiveTester(form){
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", (e)=>{
        if(e.target === $form){
            e.preventDefault(); //para que no se procese el formulario
            tester = window.open($form.direccion.value, "tester", `innerWidth = ${$form.ancho.value}, innerHeight = ${$form.alto.value}`);
        }
    });

    d.addEventListener("click", (e)=>{
        if(e.target.matches($form.cerrar)) tester.close();
    });
}