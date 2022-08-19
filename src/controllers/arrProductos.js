let productos = [
    {
        nombre:"Anillo",
        valor: 120000,
        fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/anillo1.jpg?alt=media&token=c04ef51a-4291-440b-84dc-50a2f318a9e7","https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/anillo2.jpg?alt=media&token=27309e80-4d23-4609-9582-d8e6592304a5"],
        descripcion: "Este es una anillo fino"

    },
    {
        nombre:"Aretas chidas",
        valor: 85000,
        fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/areee1.jpg?alt=media&token=2a34e31f-e102-464b-bf53-2332e58e9edd","https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/areee2.jpg?alt=media&token=f7e95cb2-82af-4d87-92dd-e10e19cc36ff"],
        descripcion: "Estas son aretas finas"

    },
    {
        nombre:"Collar frances",
        valor: 250000,
        fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collar1.jpg?alt=media&token=2f57f089-dfe0-4d18-a51a-3cfcfd6b3a9d","https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collar2.jpg?alt=media&token=11e3856c-0b7f-48cf-b240-f33f0936a09a"],
        descripcion: "Collar de los collares"

    },
    {
        nombre:"collar Aretes",
        valor: 380000,
        fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collararetes1.jpg?alt=media&token=907a61a2-65cf-4aaf-8e3d-97f1e1bacd72", "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collararetes2.jpg?alt=media&token=1d9a0be7-98e8-4251-bf54-7c9a4ac65814"],
        descripcion: "esto es un collar con aretes"

    }, {
        nombre:"Anillob",
        valor: 120000,
        fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/anillo1.jpg?alt=media&token=c04ef51a-4291-440b-84dc-50a2f318a9e7","https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/anillo2.jpg?alt=media&token=27309e80-4d23-4609-9582-d8e6592304a5"],
        descripcion: "Este es una anillo fino"

    },
    {
        nombre:"Aretas chidasb",
        valor: 85000,
        fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/areee1.jpg?alt=media&token=2a34e31f-e102-464b-bf53-2332e58e9edd","https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/areee2.jpg?alt=media&token=f7e95cb2-82af-4d87-92dd-e10e19cc36ff"],
        descripcion: "Estas son aretas finas"

    },
    {
        nombre:"Collar francesb",
        valor: 250000,
        fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collar1.jpg?alt=media&token=2f57f089-dfe0-4d18-a51a-3cfcfd6b3a9d","https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collar2.jpg?alt=media&token=11e3856c-0b7f-48cf-b240-f33f0936a09a"],
        descripcion: "Collar de los collares"

    },
    {
        nombre:"collar Aretesb",
        valor: 380000,
        fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collararetes1.jpg?alt=media&token=907a61a2-65cf-4aaf-8e3d-97f1e1bacd72", "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collararetes2.jpg?alt=media&token=1d9a0be7-98e8-4251-bf54-7c9a4ac65814"],
        descripcion: "esto es un collar con aretes"

    }
]

//llamamos la fila
let fila = document.getElementById("fila");

//Recorremos el arreglo

productos.forEach(function(producto){

   

    //creamos donde almacenar los datos
    let columna = document.createElement("div");
    columna.classList.add("col");


//creando una targeta
let tarjeta = document.createElement("div");
tarjeta.classList.add("card","text-center", "h-100" , "w-100", );




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


   //creando un titulo
   let titulo = document.createElement("h3");
   titulo.classList.add("fw-bold");
   titulo.textContent = producto.nombre;


   //creando los precios
  let valor = document.createElement("h2");
  valor.classList.add("EM");
  valor.textContent = "$" + producto.valor;




  //creando la descripcion
  let desc = document.createElement("h1");
  desc.classList.add("text-black-50", "d-none");
  desc.textContent = producto.descripcion;




  tarjeta.appendChild(imagen);
  tarjeta.appendChild(titulo);
  tarjeta.appendChild(valor);
  tarjeta.appendChild(desc);
  columna.appendChild(tarjeta);

  fila.appendChild(columna);






})