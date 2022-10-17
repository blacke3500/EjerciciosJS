const d = document,
    w = window;

export function btnTop(btn){
    w.addEventListener("scroll", (e)=>{
        if(scrollY>500){
            d.querySelector(btn).style.visibility = "visible"; 
            d.querySelector(btn).style.opacity = 1; 
        }
        
        else{
            d.querySelector(btn).style.visibility = "hidden";
            d.querySelector(btn).style.opacity = 0; 
        }
    });

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                top : 0,
                behavior : "smooth"
            });
        }    
    });
    
}