console.log("hola estoy detallando la compra");
//llamar a la memoria
let producto = JSON.parse(localStorage.getItem("producto"));
console.log(producto);

let carritoMemoria = JSON.parse(localStorage.getItem("carrito"));
console.log(carritoMemoria);

let carrito;


if (JSON.parse(localStorage.getItem("carrito"))!= null) {
    carrito= JSON.parse(localStorage.getItem("carrito"))
    let pildora = document.getElementById("pildora"); 
    pildora.textContent=carrito.length  
} else {
    carrito=[]
}


//referecnioar la imagen del producto
let foto = document.getElementById("ImagenInfo");
foto.src = producto.foto;

//referenciar el nombre del productp
let nombre = document.getElementById("nombreInfo");
nombre.textContent = producto.nombre;

//referenciar el precio del producto
let precio = document.getElementById("precioInfo");
precio.textContent = producto.precio;




//referenciar popularidad
let popularidad = document.getElementById("popularidadInfo")
popularidad.textContent = producto.popularidad;

 
let estrella = "l"


let cantidad12 = 4;
console.log(estrella.repeat(cantidad12))




//referenciar la descripcion del producto
let descripcion = document.getElementById("descripcionInfo");
descripcion.textContent = producto.descripcion;

let pildora = document.getElementById("pildora");
console.log(pildora.textContent);

//esucho el click en el boton añadir al carrito
let botonCarrito = document.getElementById("botonAgregarCarrtito");
botonCarrito.addEventListener("click", function (evento) {
  let cantidad = document.getElementById("cantidadProducto");
  cantidad = cantidad.value;
  

  
  //agrgamos la cantidad al objeto producto
  producto.cantidad = cantidad;
  console.log(producto);

  //agregamos el producto al carrito de compras
  carrito.push(producto);
  console.log(carrito);

  //agregando elm carrito a la memoria

  localStorage.setItem("carrito", JSON.stringify(carrito));

  //pintando la pildora con la cantidad de prodcutos
  let cantidadCarrito = carrito.length;
  pildora.textContent = cantidadCarrito;
});

