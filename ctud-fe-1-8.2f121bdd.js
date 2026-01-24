let t=document.querySelector(".list");fetch("http://localhost:3000/icecream").then(t=>t.json()).then(e=>{let i;return i=e.map(({id:t,flavour:e,type:i,callory:a,price:s,description:c,image:l})=>`<li class="item">
            <img src="${l}" alt="${i}" class="item-img">
            <h3 class="item-flavour">${e}</h3>
            <p class="item-type">${i}</p>
            <p class="item-price">$${s}</p>
            <p class="item-desc">${c}</p>
            <div class="btn-wrapper"> <button data-action="delete" type="button" class="button">Delete</button>
            <button data-action="edit" type="button" class="button">Edit</button>
        </div>
        </li>`).join(""),void t.insertAdjacentHTML("beforeend",i)});
//# sourceMappingURL=ctud-fe-1-8.2f121bdd.js.map
