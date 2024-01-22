const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.image-light')
const burgerOne = document.querySelector('.burger');

// console.log(imagenes)
// console.log(imagenesLight)
// console.log(contenedorLight)

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        //llamo a la funcion aparecer imagen y le doy como parametro el nombre del archivo
        aparecerImagen (imagen.getAttribute('src'));
         //console.log(imagen.getAttribute('src')) muestra el nombre del archivo en consola, asi le doy el nombre de la imagen a la que se dio click para que aparezca en el lightbox
    })
})

contenedorLight.addEventListener('click', (e)=>{
    // console.log(e.target) //para saber qué se está clickeando
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle("show");
        imagenesLight.classList.toggle("showImage"); //si le doy click a otra cosa que no sea imagenesLight, el lightbox se cierra
        burgerOne.style.opacity ='1'
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen; //imagenesLight es la imagen que se mostrará en el lightbox y ahora le indico que quiero que tenga el nombre de la imagen clickeada
    contenedorLight.classList.toggle("show"); //cuando le doy click le agrego la clase show que es la que indica si se muestra o no el contenedor de lightbox- translate(0)
    imagenesLight.classList.toggle("showImage");
    burgerOne.style.opacity ='0'
}