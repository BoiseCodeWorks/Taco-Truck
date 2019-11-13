let partyMode = false;

let food = [
  {
    title: "Taco",
    description: "3 soft shell tacos with meat cheese and lettuce",
    price: 3.0,
    subcontent: "Beef, Cheese, Chicken"
  },
  {
    title: "Burrito",
    description:
      "1 large burrito made fresh by kittens, they washed their paws",
    price: 9.0,
    subcontent: ""
  },
  {
    title: "Enchilada",
    description:
      "1 large enchilada made fresh by bearded Lumberjacks, they washed their axes",
    price: 8.0
  },
  {
    title: "Quesadilla",
    description: "1 large Quesadilla made with fresh pteradactyl, super rare",
    price: 800.0
  }
];

function draw(name) {
  //NOTE loop over the food array and find the (f)ood where the food title is the same as the name passed
  let foodItem = food.find(f => f.title.toLowerCase() == name.toLowerCase());
  document.querySelector("#food-details").innerHTML = `
  <h3>${foodItem.title}</h3>
  <p>${foodItem.description}</p>
  <p><b>Price: $${foodItem.price}</b></p>
  `;
  if (foodItem.subcontent) {
    document.querySelector("#food-details").innerHTML += `
    <p><sm>extra info: ${foodItem.subcontent}</sm></p>
    `;
  }
}

function drawButtons() {
  //NOTE make an empty container for all the html to go into
  let template = "";
  //   for (let i = 0; i < food.length; i++) {
  //     const item = food[i];
  //     template += `<button class="btn btn-primary" onclick="draw('${item.title}')">${item.title}!</button>`;
  //   }
  food.forEach(item => {
    template += `<button class="btn btn-primary" onclick="draw('${item.title}')">${item.title}!</button>`;
  });

  //NOTE inject HTML into page
  document.querySelector("#buttons").innerHTML = template;
}

function party() {
  //   if (!partyMode) {
  //     document.querySelector("#title").classList.add("party", "fa-pulse");
  //     partyMode = true;
  //   } else {
  //     document.querySelector("#title").classList.remove("party", "fa-pulse");
  //     partyMode = false;
  //   }
  document.querySelector("#title").classList.add("party", "fa-pulse");
  //do this thing after x amount of miliseconds
  setTimeout(noParty, 1500);
}

function noParty() {
  document.querySelector("#title").classList.remove("party", "fa-pulse");
}

drawButtons();
