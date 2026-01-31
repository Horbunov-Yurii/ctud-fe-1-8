let t=()=>fetch("http://localhost:3000/icecream").then(t=>t.json()),e=document.querySelector(".list"),i=document.querySelector(".add-btn"),a=document.querySelector(".backdrop"),l=document.querySelector(".modal-form");function c(t){e.innerHTML=t.map(({id:t,flavour:e,type:i,callory:a,price:l,description:c,image:n})=>`<li id="${t}" class="item">
            <img src="${n}" alt="${i}" class="item-img">
            <h3 class="item-flavour">${e}</h3>
            <p class="item-type">${i}</p>
            <p class="item-price">$${l}</p>
            <p class="item-desc">${c}</p>
            <div class="btn-wrapper"> <button data-action="delete" type="button" class="button">Delete</button>
            <button data-action="edit" type="button" class="button">Edit</button>
        </div>
        </li>`).join("")}t().then(t=>c(t)),i.addEventListener("click",()=>{a.style.display="flex"}),l.addEventListener("submit",e=>{e.preventDefault();let i=e.currentTarget.elements;fetch("http://localhost:3000/icecream",{method:"POST",body:JSON.stringify({flavour:i.flavour.value.trim(),type:i.type.value.trim(),price:i.price.value.trim(),description:i.desc.value.trim(),image:i.url.value.trim()}),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(t=>t.json()).then(e=>{l.reset(),a.style.display="none",t().then(t=>c(t))})}),e.addEventListener("click",e=>{let i=e.target.dataset.action;if(!i)return;let a=e.target.closest("li").id;"delete"===i&&fetch(`http://localhost:3000/icecream/${a}`,{method:"DELETE"}).then(t=>t.json()).then(e=>t(e)).then(t=>c(t))});
//# sourceMappingURL=ctud-fe-1-8.6285da86.js.map
