const blogpost = document.querySelector(".oneblogpost");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const urlurl = "https://www.flowerpower-ml.no/wp-json/wp/v2/posts/" + id + "?_embed";

console.log(urlurl);


async function fetchPost() {
    try {
        const response = await fetch(urlurl);
        const blogspesific = await response.json();

        console.log(blogspesific);

        blogpost.innerHTML = "";

        createHTML(blogspesific);

    }

    catch(error){
        console.log(error);
        blogpost.innerHTML += displayError();
    }
}

fetchPost();

function createHTML(blogspesific) {
    blogpost.innerHTML =
    `<h2>${blogspesific.title.rendered}</h2>
    <a class="summary">${blogspesific.excerpt.rendered}</a>
    <img class="blogpicture" src="${blogspesific._embedded['wp:featuredmedia']['0'].source_url}" alt="${blogspesific._embedded['wp:featuredmedia']['0'].alt_text}">
    <a class="text-content">${blogspesific.content.rendered}</a>
    <a class="date"> Published: ${blogspesific.date}</a>
    `;
}



const modalContainer = document.querySelector(".modal")
const blogImage = document.querySelector(".oneblogpost");
const modalImage = document.querySelector(".modal-content");
const closeModal = document.getElementsByClassName("closemodal")[0];

blogImage.onclick = function(){
    const imageElement = this.querySelector('img');
    modalContainer.style.display = "block";
    modalImage.src = imageElement.src;
}

closeModal.onclick = function(){
    modalContainer.style.display = "none";
}
