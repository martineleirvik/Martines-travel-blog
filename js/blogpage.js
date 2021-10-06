const url = "https://www.flowerpower-ml.no/wp-json/wp/v2/posts?_embed&per_page=100";
const blogpostContainer = document.querySelector(".blogposts");
const button = document.querySelector(".showButton");


async function getPosts() {

    try{
        const response = await fetch(url);
        const contents = await response.json();
        console.log(contents);

        blogpostContainer.innerHTML = "";

        for (let i = 0; i < contents.length; i++) {
            console.log(contents[i].title.rendered);
        
            renderItems(contents[i]);                  

        }
    }

    catch(error) {
        console.log(error);
        blogpostContainer.innerHTML += displayError();
    }
}

getPosts();


export function renderItems(contents){
    blogpostContainer.innerHTML +=
                                        `<a href="blogspesific.html?id=${contents.id}" class="post">
                                        <h3>${contents.title.rendered}</h3>
                                        <img class="latestpicture" src="${contents._embedded['wp:featuredmedia']['0'].source_url}" alt="${contents._embedded['wp:featuredmedia']['0'].alt_text}">
                                        <p>${contents.excerpt.rendered}</p>
                                        </a>` ;
}


async function buttonClick() {

    button.setAttribute("disabled", false);


}

button.addEventListener("click", buttonClick);