const d = document,
    n = navigator,
    w = window;

export function connectionInfo(){
    const isOnLine = ()=>{
        const $div = d.createElement("div");

        if(n.onLine){
            $div.textContent = "Conexión Restablecida";
            $div.classList.add("con-establecida");
        }
        else{
            $div.textContent = "Conexión Perdida";
            $div.classList.add("con-perdida");
        }

        d.body.insertAdjacentElement("afterbegin", $div);
        setTimeout(()=> d.body.removeChild($div), 2000);
    };

    w.addEventListener("online", (e)=> isOnLine());
    w.addEventListener("offline", (e)=> isOnLine());
}