let car = JSON.parse(localStorage.getItem("car"));
let totalPurchase = document.getElementById("totalPurchase");
let total = 0

//
let bill = document.getElementById("bill");

//comprobando el estado del carrito de compras
if (car == null) {

   //poner el total en cero
   totalPurchase.textContent = "Total: US 0";
   
  let row = document.createElement("div");
  row.classList.add("row", "my-5", "justify-content-center");

  let column = document.createElement("div");
  column.classList.add("col-12", "col-md-4");

  let picture = document.createElement("img");
  picture.classList.add("img-fluid", "w-100");
  picture.src = "../../assets/img/carritoVacio.png";
  console.log(picture);

  let message = document.createElement("h3");
  message.classList.add("text-center");
  message.textContent = "Make a Purchase!";

  let a = document.createElement("a");
  a.setAttribute("href", "../views/coleccion.html");
  a.classList.add(
    "btn",
    "bg-dark",
    "text-white",
    "d-flex",
    "justify-content-center"
  );
  let aTexto = document.createTextNode("Back to back");
  a.appendChild(aTexto);

  // document.body.appendChild(a);

  column.appendChild(picture);
  column.appendChild(message);
  column.appendChild(a);
  row.appendChild(column);
  bill.appendChild(row);
} else {
  //RECORRO EL CARRITO
  car.forEach(function (product) {
    let row = document.createElement("div");
    row.classList.add(
      "row",
      "my-4",
      "justify-content-center",
      "border",
      "border-dark",
      "rounded",
      "shadow",
      "p-3"
    );

    let column1 = document.createElement("div");
    column1.classList.add("col-12", "col-md-5");

    let column2 = document.createElement("div");
    column2.classList.add(
      "col-12",
      "col-md-3",
      "text-center",
      "my-auto",
      "border-end"
    );

    let column3 = document.createElement("div");
    column3.textContent = "Subtotal";
    column3.classList.add(
      "col-12",
      "col-md-3",
      "align-self-center",
      "fs-1",
      "text-center"
    );

    let picture = document.createElement("img");
    picture.classList.add("img-fluid", "w-100");
    picture.src = product.picture;

    let name = document.createElement("h3");
    name.classList.add("text-content");
    name.textContent = product.name;

    let quantity = document.createElement("h3");
    name.classList.add("text-center", "mt-5");
    quantity.textContent = "Unity: " + product.quantity;

    let price = document.createElement("h4");
    name.classList.add("text-center", "mt-5");
    price.textContent = "Unity Cost: " + product.price;

    let subtotal = document.createElement("h2");
    subtotal.classList.add("fw-bold", "text-center", "bg-dark", "text-white");

    let subTotalcalculado = product.price.split("US$")[1] * product.quantity;
    console.log(subTotalcalculado);
    subtotal.textContent = "US " + subTotalcalculado;

    //CALCULAR EL TOTAL = SUMATORIA DE SUBTOTALES
      total= total + subTotalcalculado
      console.log(total)

   //poner el total en cero
   totalPurchase.textContent = "US$ " + total
   

    let buttonClear = document.getElementById("buttonClear");
    buttonClear.addEventListener("click", function () {
      //limpio el carrito de la memoria
      localStorage.removeItem("car");

      //recargar la pagina
      window.location.href = "../views/resumenCompra.html";

      
    });

    column1.appendChild(picture);
    row.appendChild(column1);
    row.appendChild(column2);
    column2.appendChild(name);
    column2.appendChild(price);
    column2.appendChild(quantity);
    column3.appendChild(subtotal);
    row.appendChild(column3);
    bill.appendChild(row);
  });
}
