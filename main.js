
 /* function buton (id){
    const boton = document.getElementById(id);
    const padre = boton.parentNode
    let aleatorio= Math.floor(Math.random() * 12345678);
    let hijo = document.createElement("h1");
    hijo.innerHTML= "Hola padre";
    padre.appendChild(hijo);

    padre.style.backgroundColor = "#" + aleatorio;
}  */

// con listener 
    const list_id = [];
    const list_botones = [];
    // Obtengo todos los nodos con el selector CSS Button
    const botones = document.querySelectorAll("button");
    // Recorro con un ForEach cada Button y lo agrego con push a la lista list_id su ID
    let ids = botones.forEach(el => list_id.push(el.id));
   /*  Recorro con un forEach list_id y obtengo un elemento por id pasando como parametro cada id de 
       list_id y lo agrego con un push a list_botones*/
    let btns = list_id.forEach(el => list_botones.push(document.getElementById(el)));
    // Rocorro lsit botones con un forEach y agrego a cada elemto un Event Handler al dar dar click se ejeucuta 
    list_botones.forEach(el => el.addEventListener("click", ()=>{
        let padre = el.parentNode;
        let aleatorio= Math.floor(Math.random() * 12345678);
        let hijo = document.createElement("h1");
        hijo.innerHTML= "Hola padre";
        padre.appendChild(hijo);
        padre.style.backgroundColor = "#" + aleatorio;
    }))
        

document.querySelector('#alone').addEventListener("click", () => {
    document.body.innerHTML = "";
})







