// DOM 
const rowEl = document.getElementById("postsRow");

//global variables
const endPoint= "https://lanciweb.github.io/demo/api/pictures/";
const posts =[];



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
    console.log(arr)
    let postsHtml ="";
    arr.forEach(element => {
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
}

getPhotoPost();

