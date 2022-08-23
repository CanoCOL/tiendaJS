let productos = [
  {
    nombre: "Anillo",
    fotos: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/anillo1.jpg?alt=media&token=c04ef51a-4291-440b-84dc-50a2f318a9e7",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/anillo2.jpg?alt=media&token=27309e80-4d23-4609-9582-d8e6592304a5",
    ],
    precio: 120000,
    popularidad: 5,
    descripcion: "Este es una anillo fino",
  },
  {
    nombre: "Aretas chidas",
    fotos: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/areee1.jpg?alt=media&token=2a34e31f-e102-464b-bf53-2332e58e9edd",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/areee2.jpg?alt=media&token=f7e95cb2-82af-4d87-92dd-e10e19cc36ff",
    ],
    precio: 85000,
    popularidad: 5,
    descripcion: "Estas son aretas finas",
  },
  {
    nombre: "Collar frances",
    fotos: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collar1.jpg?alt=media&token=2f57f089-dfe0-4d18-a51a-3cfcfd6b3a9d",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collar2.jpg?alt=media&token=11e3856c-0b7f-48cf-b240-f33f0936a09a",
    ],
    precio: 250000,
    popularidad: 5,
    descripcion: "Collar de los collares",
  },
  {
    nombre: "collar Aretes",
    fotos: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collararetes1.jpg?alt=media&token=907a61a2-65cf-4aaf-8e3d-97f1e1bacd72",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collararetes2.jpg?alt=media&token=1d9a0be7-98e8-4251-bf54-7c9a4ac65814",
    ],
    precio: 380000,
    popularidad: 5,
    descripcion: "esto es un collar con aretes",
  },
  {
    nombre: "Anillob",
    fotos: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/anillo1.jpg?alt=media&token=c04ef51a-4291-440b-84dc-50a2f318a9e7",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/anillo2.jpg?alt=media&token=27309e80-4d23-4609-9582-d8e6592304a5",
    ],
    precio: 120000,
    popularidad: 5,
    descripcion: "Este es una anillo fino",
  },
  {
    nombre: "Aretas chidasb",
    fotos: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/areee1.jpg?alt=media&token=2a34e31f-e102-464b-bf53-2332e58e9edd",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/areee2.jpg?alt=media&token=f7e95cb2-82af-4d87-92dd-e10e19cc36ff",
    ],
    precio: 85000,
    popularidad: 5,
    descripcion: "Estas son aretas finas",
  },
  {
    nombre: "Collar francesb",
    fotos: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collar1.jpg?alt=media&token=2f57f089-dfe0-4d18-a51a-3cfcfd6b3a9d",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collar2.jpg?alt=media&token=11e3856c-0b7f-48cf-b240-f33f0936a09a",
    ],
    precio: 250000,
    popularidad: 5,
    descripcion: "Collar de los collares",
  },
  {
    nombre: "collar Aretesb",
    fotos: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collararetes1.jpg?alt=media&token=907a61a2-65cf-4aaf-8e3d-97f1e1bacd72",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collararetes2.jpg?alt=media&token=1d9a0be7-98e8-4251-bf54-7c9a4ac65814",
    ],
    precio: 380000,
    popularidad: 5,
    descripcion: "esto es un collar con aretes",
  },
];
//Recorremos el arreglo
productos.forEach(function (producto) {
  //llamamos la fila
  let fila = document.getElementById("fila");

  //CREANDO UN DIV DESDE JV
  let columna = document.createElement("div");
  columna.classList.add("col");

  //creando una targeta
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("card", "text-center", "h-100", "w-100");

  //creamos una imagen
  let imagen = document.createElement("img");
  imagen.classList.add("img-fluid", "w-100");
  imagen.src = producto.fotos[0];

  //detectamos el evento
  imagen.addEventListener("mouseover", function () {
    imagen.src = producto.fotos[1];
  });
  imagen.addEventListener("mouseleave", function () {
    imagen.src = producto.fotos[0];
  });

  //creando un nombre
  let nombre = document.createElement("h3");
  nombre.classList.add("fw-bold", "text-center");
  nombre.textContent = producto.nombre;

  //creando los precios
  let precio = document.createElement("h4");
  precio.classList.add("fw-bold", "text-center");
  precio.textContent = "$" + producto.precio;

  // CREANDO UN POPULARIDAD
  let popularidad = document.createElement("h2");
  popularidad.classList.add("d-none");
  popularidad.textContent = producto.popularidad;

  //creando estrellas
  let contendorEstrellas = document.createElement("div");
  for (let i = 1; i <= producto.popularidad; i++) {
    let estrellas = document.createElement("i");
    estrellas.classList.add("bi", "bi-star-fill", "text-warning");
    contendorEstrellas.appendChild(estrellas);
  }

  //creando la descripcion
  let descripcion = document.createElement("h5");
  descripcion.classList.add("text-black-50", "d-none");
  descripcion.textContent = producto.descripcion;

  tarjeta.appendChild(imagen);
  tarjeta.appendChild(nombre);
  tarjeta.appendChild(precio);
  tarjeta.appendChild(popularidad);
  tarjeta.appendChild(contendorEstrellas);
  tarjeta.appendChild(descripcion);
  columna.appendChild(tarjeta);
  fila.appendChild(columna);
});
