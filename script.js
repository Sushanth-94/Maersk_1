const defaultCards = [
  {
    id: 1,
    color: "#000000",
  },
  {
    id: 2,
    color: "#2B8EAD",
  },
  {
    id: 3,
    color: "#333333",
  },
  {
    id: 4,
    color: "#6F98A8",
  },
  {
    id: 5,
    color: "#333333",
  },
  {
    id: 6,
    color: "#BFBFBF",
  },
  {
    id: 7,
    color: "#EFEFEF",
  },
  {
    id: 8,
    color: "#2F454E",
  },
  {
    id: 9,
    color: "#72C3DC",
  },
];

function createCards(data, isMobile = false) {
  let cards = data;
  for (let i = 0; i < cards.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = `<p>${cards[i].id}</p>`;
    div.className = "card";
    isMobile || window.innerWidth < 376
      ? (div.style = `border-left: 10px solid ${cards[i].color}`)
      : (div.style = `background-color: ${cards[i].color}`);
    document.getElementById("cards").appendChild(div);
  }
}

createCards(defaultCards);

function onShuffle() {
  const shuffled = defaultCards.sort(() => Math.random() - 0.5);
  document.getElementById("cards").innerHTML = "";
  createCards(shuffled);
}

function onSort() {
  const sorted = defaultCards.sort((a, b) => {
    return a.id - b.id;
  });
  document.getElementById("cards").innerHTML = "";
  createCards(sorted);
}

function isMobile() {
  if (window.innerWidth < 376) {
    document.getElementById("cards").innerHTML = "";
    createCards(defaultCards, true);
  } else {
    document.getElementById("cards").innerHTML = "";
    createCards(defaultCards, false);
  }
}

document.getElementById("shuffle").addEventListener("click", onShuffle);
document.getElementById("sort").addEventListener("click", onSort);
window.addEventListener("resize", isMobile);
