let e=()=>fetch("http://localhost:3000/icecream").then(e=>e.json()),t=document.querySelector(".list"),i=document.querySelector(".add-btn"),a=document.querySelector(".backdrop"),l=document.querySelector(".modal-form");function c(e){t.innerHTML=e.map(({id:e,flavour:t,type:i,callory:a,price:l,description:c,image:n})=>`<li class="item">
            <img src="${n}" alt="${i}" class="item-img">
            <h3 class="item-flavour">${t}</h3>
            <p class="item-type">${i}</p>
            <p class="item-price">$${l}</p>
            <p class="item-desc">${c}</p>
            <div class="btn-wrapper"> <button data-action="delete" type="button" class="button">Delete</button>
            <button data-action="edit" type="button" class="button">Edit</button>
        </div>
        </li>`).join("")}e().then(e=>c(e)),i.addEventListener("click",()=>{a.style.display="flex"}),l.addEventListener("submit",t=>{t.preventDefault();let i=t.currentTarget.elements;fetch("http://localhost:3000/icecream",{method:"POST",body:JSON.stringify({flavour:i.flavour.value.trim(),type:i.type.value.trim(),price:i.price.value.trim(),description:i.desc.value.trim(),image:i.url.value.trim()}),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(t=>{l.reset(),a.style.display="none",e().then(e=>c(e))})});
//# sourceMappingURL=ctud-fe-1-8.e2ff7b52.js.map
