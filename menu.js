const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-navegacion'); //se utiliza el punto para referenciar a la clase, como en CSS

console.log(menu)
console.log(burger)

burger.addEventListener('click', ()=>{
    menu.classList.toggle("spread"); //cada vez que se haga click en la burger se le va a agregar o quitar la clase spread, dependiendo de si la tiene o no la tiene
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != burger) //para que la condicion se cumpla tienen que pasar dos cosas: 1) menu tiene que tener la clase spread y 2) se le debe estar dando click a algo que no sea ni menu ni burger
    {
        menu.classList.toggle("spread")
    }
    // console.log(e.target); 
    //indica a qué elemento le estoy dando click
})