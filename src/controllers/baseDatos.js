let products = [
  {
    name: "Anillo",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/anillo1.jpg?alt=media&token=c04ef51a-4291-440b-84dc-50a2f318a9e7",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/anillo2.jpg?alt=media&token=27309e80-4d23-4609-9582-d8e6592304a5",
    ],
    price: 120000,
    popularity: 5,
    Description: "Este es una anillo fino",
  },
  {
    name: "Aretas chidas",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/areee1.jpg?alt=media&token=2a34e31f-e102-464b-bf53-2332e58e9edd",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/areee2.jpg?alt=media&token=f7e95cb2-82af-4d87-92dd-e10e19cc36ff",
    ],
    price: 85000,
    popularity: 4,
    Description: "Estas son aretas finas",
  },
  {
    name: "Collar frances",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collar1.jpg?alt=media&token=2f57f089-dfe0-4d18-a51a-3cfcfd6b3a9d",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collar2.jpg?alt=media&token=11e3856c-0b7f-48cf-b240-f33f0936a09a",
    ],
    price: 250000,
    popularity: 5,
    Description: "Collar de los collares",
  },
  {
    name: "collar Aretes",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collararetes1.jpg?alt=media&token=907a61a2-65cf-4aaf-8e3d-97f1e1bacd72",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collararetes2.jpg?alt=media&token=1d9a0be7-98e8-4251-bf54-7c9a4ac65814",
    ],
    price: 380000,
    popularity: 3,
    Description: "esto es un collar con aretes",
  },
  {
    name: "Anillob",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/anillo1.jpg?alt=media&token=c04ef51a-4291-440b-84dc-50a2f318a9e7",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/anillo2.jpg?alt=media&token=27309e80-4d23-4609-9582-d8e6592304a5",
    ],
    price: 120000,
    popularity: 5,
    Description: "Este es una anillo fino",
  },
  {
    name: "Aretas chidasb",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/areee1.jpg?alt=media&token=2a34e31f-e102-464b-bf53-2332e58e9edd",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/areee2.jpg?alt=media&token=f7e95cb2-82af-4d87-92dd-e10e19cc36ff",
    ],
    price: 85000,
    popularity: 4,
    Description: "Estas son aretas finas",
  },
  {
    name: "Collar francesb",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collar1.jpg?alt=media&token=2f57f089-dfe0-4d18-a51a-3cfcfd6b3a9d",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collar2.jpg?alt=media&token=11e3856c-0b7f-48cf-b240-f33f0936a09a",
    ],
    price: 250000,
    popularity: 2,
    Description: "Collar de los collares",
  },
  {
    name: "collar Aretesb",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collararetes1.jpg?alt=media&token=907a61a2-65cf-4aaf-8e3d-97f1e1bacd72",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/collararetes2.jpg?alt=media&token=1d9a0be7-98e8-4251-bf54-7c9a4ac65814",
    ],
    price: 380000,
    popularity: 4,
    Description: "esto es un collar con aretes",
  },
];
//We go through the arrangement
products.forEach(function (product) {
  //call a row
  let row = document.getElementById("row");

  //Creating a div where JV
  let column = document.createElement("div");
  column.classList.add("col");

  //Creating a card
  let card = document.createElement("div");
  card.classList.add("card", "text-center", "h-100", "w-100");

  //Creating a picture
  let picture = document.createElement("img");
  picture.classList.add("img-fluid", "w-100");
  picture.src = product.picture[0];

  //detectamos the event
  picture.addEventListener("mouseover", function () {
    picture.src = product.picture[1];
  });
  picture.addEventListener("mouseleave", function () {
    picture.src = product.picture[0];
  });

  //Creating a name
  let name = document.createElement("h3");
  name.classList.add("fw-bold", "text-center");
  name.textContent = product.name;

  //Creating the prices
  let price = document.createElement("h4");
  price.classList.add("fw-bold", "text-center");
  price.textContent = "$" + product.price;

  // Creating a popularity
  let popularity = document.createElement("h2");
  popularity.classList.add("d-none");
  popularity.textContent = product.popularity;

  //Creating a stars
  let contendorstars = document.createElement("div");
  for (let i = 1; i <= product.popularity; i++) {
    let stars = document.createElement("i");
    stars.classList.add("bi", "bi-star-fill", "text-warning");
    contendorstars.appendChild(stars);
  }

  //Creating a Description
  let Description = document.createElement("h5");
  Description.classList.add("text-black-50", "d-none");
  Description.textContent = product.Description;

  card.appendChild(picture);
  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(popularity);
  card.appendChild(contendorstars);
  card.appendChild(Description);
  column.appendChild(card);
  row.appendChild(column);
});
