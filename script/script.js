// get element
function getElement(id) {
  return document.getElementById(id);
}

let cards = document.getElementsByClassName("card-btn");

for (let card of cards) {
  card.addEventListener("click", function () {
    let title = card.parentNode.parentNode.childNodes[1].innerText;
    let price = card.parentNode.parentNode.children[1].children[0].innerText;

    let img =
      card.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].src;
    console.log(img);

    let total = getElement("total-price").innerText;

    // function

    let currentPrice = Number(price) + Number(total);

    document.getElementById("total-price").innerText = currentPrice;

    // card add
    let cardContainer = document.getElementById("card-container");

    let newCard = document.createElement("div");
    newCard.innerHTML = ` <div
                class="flex items-center justify-between bg-gray-300 rounded-xl p-4"
              >
                <img src="${img}" alt="" class="w-20" />
                <div>
                  <h1 class="text-xl font-semibold">${title}</h1>
                  <p class="text-xl font-normal">${price} TK</p>
                </div>
              </div>`;

    cardContainer.append(newCard);
  });
}
