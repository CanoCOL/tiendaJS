let products = [
  {
    name: "Casual Ring",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/anillo1.jpg?alt=media&token=c04ef51a-4291-440b-84dc-50a2f318a9e7",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/anillo2.jpg?alt=media&token=27309e80-4d23-4609-9582-d8e6592304a5",
    ],
    price: 350,
    popularity: 5,
    Description: "This is a fine ring",
  },
  {
    name: "Luxurious Earrings",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/areee1.jpg?alt=media&token=2a34e31f-e102-464b-bf53-2332e58e9edd",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/areee2.jpg?alt=media&token=f7e95cb2-82af-4d87-92dd-e10e19cc36ff",
    ],
    price: 100,
    popularity: 4,
    Description: "Typical earrings for travel!",
  },
  {
    name: "Pisargolla fan",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/111.png?alt=media&token=93217199-ae8f-4386-ba05-ff44664af417",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/2222.png?alt=media&token=42f7b339-2cc1-4ef6-aa7c-2e4816ab78ec",
    ],
    price: 3500,
    popularity: 5,
    Description:
      "Pisa Ring made of 18 Karat Golden Gold, offers a Modern and Glamorous Fan-shaped design with a central Zircon loaded with Shine, a significant Piece to remember this special day.",
  },
  {
    name: "GUCCI ring",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/niu.jpg?alt=media&token=a1028a29-316f-4712-b4bf-c27ce91b2301",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/nue.jpg?alt=media&token=0472875a-4fa3-4eec-ac44-1595e96c5ab7",
    ],
    price: 760,
    popularity: 2,
    Description:
      "Open ring in 18K yellow gold in the shape of a panther from the Le Marché des Merveilles collection. Engraved, red enamel animal has brilliant-cut diamond eyes",
  },
  {
    name: "Egyptian earrings",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/aa.jpg?alt=media&token=0c65d11b-cbe8-4390-bbf3-c533d5f08a69",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/bb.jpg?alt=media&token=b9c7a5ac-5628-4e88-a408-7c159960daf3",
    ],
    price: 1000,
    popularity: 3,
    Description:
      "18-karat yellow gold studs, flower, with 2 central 0.40 ct diamonds and 0.60 ct diamond decoration, 7.50 mm. wide, from the flowers for you collection",
  },
  {
    name: "Candongas",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/cc.jpg?alt=media&token=9ff6272f-1896-49bc-bd63-00e5c078f83c",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/dd.jpg?alt=media&token=09f0a317-993c-4a6a-8696-3e6ce3058bff",
    ],
    price: 4700,
    popularity: 4,
    Description:
      "Flat oval 18-carat yellow gold earrings with 0.50 ct emeralds and 0.45 ct diamonds",
  },
  {
    name: "Red pearls earring",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/ee.jpg?alt=media&token=24c52f1c-7745-42ac-a7ff-8a84bf93fe1f",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/ff.jpg?alt=media&token=d9dd4ba0-f493-47fa-9944-28c2597be482",
    ],
    price: 2000,
    popularity: 2,
    Description:
      "18k red gold earrings with 2.17 ct rubies and 0.06 ct diamonds",
  },
  {
    name: "Marriage Ring",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/matri1.jpg?alt=media&token=592bdfe2-9960-419b-a5f6-e32553e28812",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/matri2.jpg?alt=media&token=37773d55-e064-46cc-ae7c-e6b6b43af21c",
    ],
    price: 680,
    popularity: 5,
    Description:
      "Ring in 18 karat white gold, with a central diamond of 1.00 ct",
  },
  {
    name: "Bauner Diamond Ring",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/penu.jpg?alt=media&token=04663eb8-ebe3-4c9a-9922-70d589e42a37",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/ltima.jpg?alt=media&token=dcf7ee00-0507-47c7-9ac7-ec9d12adef93",
    ],
    price: 9400,
    popularity: 5,
    Description:
      "The special design of this 18K rose gold ring is characterized by two rings formed by vertical ovals that are intertwined by four half rings of pavé diamonds.",
  },
  {
    name: "White Gold Bauer Ring",
    picture: [
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/321.webp?alt=media&token=6a89f1bc-357a-4e95-8d69-2642e96082d5",
      "https://firebasestorage.googleapis.com/v0/b/tiendaropa-9c456.appspot.com/o/123.jpg?alt=media&token=58b84b22-d003-411c-b548-888eba14e4c9",
    ],
    price: 15000,
    popularity: 4,
    Description:
      "An intense green emerald leaf delicately embraces the finger of the wearer of this piece, adorned with a row of brilliant-cut diamonds and made of 18k white gold.",
  },
];
//We go through the arrangement
products.forEach(function (product) {
  //call a row
  let row = document.getElementById("row");

  //Creating a div where JV
  let column = document.createElement("div");
  column.classList.add("col", "mt-5");

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

  //the image of expand info is changed
  picture.addEventListener("click", function () {
    picture.src = product.picture[0];
  });
  //Creating a name
  let name = document.createElement("h3");
  name.classList.add("fw-bold", "text-center");
  name.textContent = product.name;

  //Creating the prices
  let price = document.createElement("h4");
  price.classList.add("fw-bold", "text-center");
  price.textContent = "US$ " + product.price;

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
