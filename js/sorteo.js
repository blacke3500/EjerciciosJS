const d = document;

export function raffleWinner(ganadorBtn, selector){
    const getWinner = (selector) =>{
        const $lenguajes = d.querySelectorAll(selector),
        random = Math.floor(Math.random() * $lenguajes.length),
        winner = $lenguajes[random];


        return `El ganador es: ${winner.textContent}` //es un list item, por lo que hay que regresar su text content

    };
    
    d.addEventListener("click", (e)=>{
        if(e.target.matches(ganadorBtn)){
            let result = getWinner(selector);
            alert(result);
            console.log(result);
        }
    });
}