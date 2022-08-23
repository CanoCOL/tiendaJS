//calling the memory
let product = JSON.parse(localStorage.getItem("product"));
console.log(product);

let carMemory = JSON.parse(localStorage.getItem("car"));
console.log(carMemory);

let car;

if (JSON.parse(localStorage.getItem("car")) != null) {
  car = JSON.parse(localStorage.getItem("car"));
  let pill = document.getElementById("pill");
  pill.textContent = car.length;
} else {
  car = [];
}

//references the name del product
let name = document.getElementById("nameInfo");
name.textContent = product.name;

//references the picture of product
let picture = document.getElementById("pictureInfo");
picture.src = product.picture;

//references the Description the product
let Description = document.getElementById("DescriptionInfo");
Description.textContent = product.Description;

//references the price of product
let price = document.getElementById("priceInfo");
price.textContent = product.price;

//references the  popularity
let popularity = document.getElementById("popularityInfo");
popularity.classList.add("d-none");
popularity.textContent = product.popularity;

//creating stars
let containerstars = document.getElementById("containerstars");
let popularityInfo = document.getElementById("popularity");
for (let i = 1; i <= product.popularity; i++) {
  let stars = document.createElement("i");
  stars.classList.add("bi", "bi-star-fill", "text-warning");
  containerstars.appendChild(stars);
}

let pill = document.getElementById("pill");
console.log(pill.textContent);

//I hear the click on the button add to cart
let addCar = document.getElementById("addCar");
addCar.addEventListener("click", function () {
  let quantity = document.getElementById("quantityProduct");
  quantity = quantity.value;
  console.log("add: " + quantity);

  //add the quantity a objeto product
  product.quantity = quantity;
  console.log(product);

  //add the product of car the shopping
  car.push(product);
  console.log(car);

  //add the car of the memory
  localStorage.setItem("car", JSON.stringify(car));

  //Painting the pill with quantitythe products
  let quantityCar = car.length;
  pill.textContent = quantityCar;
});
