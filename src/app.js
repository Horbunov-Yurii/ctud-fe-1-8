import { getIceAPI } from "./api/getIceAPI";
// console.log(getIceAPI);

const list = document.querySelector(".list");

getIceAPI().then((res) => renderLayout(res));

function renderLayout(array) {
  const item = array
    .map(({ id, flavour, type, callory, price, description, image }) => {
      return `<li class="item">
            <img src="${image}" alt="${type}" class="item-img">
            <h3 class="item-flavour">${flavour}</h3>
            <p class="item-type">${type}</p>
            <p class="item-price">$${price}</p>
            <p class="item-desc">${description}</p>
            <div class="btn-wrapper"> <button data-action="delete" type="button" class="button">Delete</button>
            <button data-action="edit" type="button" class="button">Edit</button>
        </div>
        </li>`;
    })
    .join("");

  list.insertAdjacentHTML("beforeend", item);
}
