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
    enableScroll();
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
    let postsHtml ="";

    arr.forEach((element) => {
        postsHtml += `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card position-relative">
                    <div class="card-top">
                        <img src=${element.url} alt="photo">
                    </div>
                    <div class="card-bottom">
                        <h2 class="card-title">${element.title}</h2>
                        <p class="card-date">${element.date}</p>
                    </div>
                    <img class="pin-img" src="./asset/img/pin.svg" alt="pin image">
                </div>
            </div>
        `
    });

    parent.innerHTML = postsHtml;
    addCardsEventListener();
}

function addCardsEventListener(){
    const cards = document.querySelectorAll(".card");
    cards.forEach((element) => {
        element.addEventListener("click", () => {
            const img = element.querySelector(".card-top img");
            const imageUrl = img.getAttribute("src");
            disableScroll();
            modalImgEl.src = imageUrl;
            overlayEl.classList.toggle("d-none");
        });
    });
}


function disableScroll(){
    document.body.classList.add("remove-scrolling");
}
function enableScroll(){
    document.body.classList.remove("remove-scrolling");
}
getPhotoPost();

