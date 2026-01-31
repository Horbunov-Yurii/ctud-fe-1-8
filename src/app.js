import { getIceAPI } from "./api/getIceAPI";
import { postIceAPI } from "./api/postIceAPI";
import { delIceAPI } from "./api/delIceAPI";



const list = document.querySelector(".list");
const addBtn = document.querySelector(".add-btn")
const backdropEl = document.querySelector(".backdrop")
const formEl = document.querySelector(".modal-form")



getIceAPI().then((res) => renderLayout(res));

function renderLayout(array) {
  const item = array
    .map(({ id, flavour, type, callory, price, description, image }) => {
      return `<li id="${id}" class="item">
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
  list.innerHTML = item
}


//modal---------------
addBtn.addEventListener("click", () => {
  openModal()
})

function openModal() {
  backdropEl.style.display = "flex"
}

function closeModal() {
  backdropEl.style.display = "none"
}

formEl.addEventListener("submit", (event) => {

  event.preventDefault()
  const elements = event.currentTarget.elements

  const icecreamData = {
    flavour: elements.flavour.value.trim(),
    type: elements.type.value.trim(),
    price: elements.price.value.trim(),
    description: elements.desc.value.trim(),
    image: elements.url.value.trim()
  }

  postIceAPI(icecreamData).then((res) => {
    formEl.reset()
    closeModal()
    getIceAPI().then((res) => renderLayout(res));
  })

})

list.addEventListener("click", (event) => {
  const action = event.target.dataset.action
  if (!action) {
    return
  }
  // const li = event.target.parentNode.parentNode
  const li = event.target.closest("li")
  const id = li.id
  if (action === "delete") {
    delIceAPI(id).then(res => getIceAPI(res)).then(res => renderLayout(res))
  }
  
})