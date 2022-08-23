console.log("hola estoy detallando la compra");
//llamar a la memoria
let producto = JSON.parse(localStorage.getItem("producto"));
console.log(producto);

let carritoMemoria = JSON.parse(localStorage.getItem("carrito"));
console.log(carritoMemoria);

let carrito;

if (JSON.parse(localStorage.getItem("carrito")) != null) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  let pildora = document.getElementById("pildora");
  pildora.textContent = carrito.length;
} else {
  carrito = [];
}


//referenciar el nombre del producto
let nombre = document.getElementById("nombreInfo");
nombre.textContent = producto.nombre;


//referecnioar la imagen del producto
let foto = document.getElementById("ImagenInfo");
foto.src = producto.foto;

//referenciar la descripcion del producto
let descripcion = document.getElementById("descripcionInfo");
descripcion.textContent = producto.descripcion;

//referenciar el precio del producto
let precio = document.getElementById("precioInfo");
precio.textContent = producto.precio;

//referenciar popularidad
let popularidad = document.getElementById("popularidadInfo");
popularidad.textContent = producto.popularidad;


let pildora = document.getElementById("pildora");
console.log(pildora.textContent);

//esucho el click en el boton añadir al carrito
let botonCarrito = document.getElementById("botonAgregarCarrtito");
botonCarrito.addEventListener("click", function () {
  let cantidad = document.getElementById("cantidadProducto");
  cantidad = cantidad.value;
  console.log("agregaste: " + cantidad);

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
