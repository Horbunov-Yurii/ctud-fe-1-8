import { getIceAPI } from "./api/getIceAPI";
import { postIceAPI } from "./api/postIceAPI";
import { delIceAPI } from "./api/delIceAPI";
import { upddateIceApi } from "./api/updateiceApi";


const list = document.querySelector(".list");
const addBtn = document.querySelector(".add-btn")
const backdropEl = document.querySelector(".backdrop")
const formEl = document.querySelector(".modal-form")

let currentEdit = null;

// getIceAPI().then((res) => renderLayout(res));
const init = async () => {
  const res = await getIceAPI()
  renderLayout(res)
}
init()

function renderLayout(array) {
  const item = array
    .map(({ id, flavour, type, price, description, image }) => {
      return `<li id="${id}" class="item">
            <img src="${image}" alt="${type}" class="item-img">
            <h3 class="item-flavour">${flavour}</h3>
            <p class="item-type">${type}</p>
            <p class="item-price">$<span class="span">${price}</span></p>
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

formEl.addEventListener("submit", async (event) => {

  event.preventDefault()
 
  const elements = event.currentTarget.elements

  const icecreamData = {
    flavour: elements.flavour.value.trim(),
    type: elements.type.value.trim(),
    price: elements.price.value.trim(),
    description: elements.desc.value.trim(),
    image: elements.url.value.trim()
  }
if (currentEdit === null ) {
  //   postIceAPI(icecreamData).then((res) => {
  //   formEl.reset()
  //   closeModal()
  //   getIceAPI().then((res) => renderLayout(res));
  // }) 
  
  await postIceAPI(icecreamData)
  formEl.reset()
  closeModal()
  const res = await getIceAPI()
  renderLayout(res)
}
if (currentEdit) {
  
  // upddateIceApi(currentEdit,icecreamData).then(res => {
  //   formEl.reset()
  //   closeModal()
  //   getIceAPI().then((res) => renderLayout(res));
  // })
  await upddateIceApi(currentEdit, icecreamData)
  formEl.reset()
  closeModal()
  const res = await getIceAPI()
  renderLayout(res)
  currentEdit = null
}
}

)

list.addEventListener("click", async (event) => {

  const action = event.target.dataset.action
  if (!action) {
    return
  }
  // const li = event.target.parentNode.parentNode
  const li = event.target.closest("li")
  const id = li.id
  if (action === "delete") {
    // delIceAPI(id).then(res => getIceAPI(res)).then(res => renderLayout(res))
    await delIceAPI(id)
    const res = await getIceAPI()
    console.log(res)
    renderLayout(res)
  }
  if(action === "edit") {
    currentEdit =  id

    formEl.elements.url.value = li.querySelector(".item-img").src;
    formEl.elements.flavour.value = li.querySelector(".item-flavour").textContent
    formEl.elements.type.value = li.querySelector(".item-type").textContent
    formEl.elements.price.value = li.querySelector(".span").textContent
    formEl.elements.desc.value = li.querySelector(".item-desc").textContent

        openModal()
    
  }
  
})


