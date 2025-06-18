// DOM 
const rowEl = document.getElementById("postsRow");
const overlayEl = document.getElementById("overlay");
const btnCloseEl = document.getElementById("btnClose");
const modalImgEl = document.getElementById("modalImg");

//global variables
const endPoint= "https://lanciweb.github.io/demo/api/pictures/";
const posts =[];

btnCloseEl.addEventListener("click", ()=>{
    overlayEl.classList.toggle("d-none");
})

function getPhotoPost(){
    fetch(endPoint)
    .then(res => res.json())
    .then(data =>{
        data.forEach(element =>{
            posts.push(element);
        })
    })
    .then(()=>{
        renderPosts(rowEl, posts);
    })
    .catch(err =>{
        console.log(err);
    });
}

function renderPosts(parent, arr){
    arr.forEach(element => {
        const col = document.createElement("div");
        col.classList.add("col-12", "col-md-6", "col-lg-4");
        parent.appendChild(col);

        const card = document.createElement("div");
        card.classList.add("card", "position-relative");
        card.addEventListener("click", ()=>{
            modalImgEl.src = element.url;
            overlayEl.classList.toggle("d-none");
        })
        col.appendChild(card);

        const cardTop = document.createElement("div");
        cardTop.classList.add("card-top");
        card.appendChild(cardTop);
        const img = document.createElement("img");
        img.src = element.url;
        img.alt = element.title;

        cardTop.appendChild(img);

        const cardBottom = document.createElement("div");
        cardBottom.classList.add("card-bottom");
        card.appendChild(cardBottom);

        const cardTitle = document.createElement("h2");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = element.title;
        cardBottom.appendChild(cardTitle);

        const cardDate = document.createElement("h2");
        cardTitle.classList.add("card-date");
        cardDate.innerText = element.date;
        cardBottom.appendChild(cardDate);

        const pinImg = document.createElement("img");
        pinImg.classList.add("pin-img");
        pinImg.src = "./asset/img/pin.svg";
        pinImg.alt = "pin image";
        card.appendChild(pinImg);
    });
}

getPhotoPost();

