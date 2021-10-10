const url = "https://www.flowerpower-ml.no/wp-json/wp/v2/posts?_embed&per_page=100";
const blogpostContainer = document.querySelector(".blogposts");
const button = document.querySelector(".showButton");




async function getPosts() {

    try{
        const response = await fetch(url);
        const contents = await response.json();
        console.log(contents);

        blogpostContainer.innerHTML = "";
        
        renderItems(contents);           
    }

    catch(error) {
        console.log(error);
        blogpostContainer.innerHTML += displayError();
    }
}

getPosts();


export function renderItems(contents){
    blogpostContainer.innerHTML = "";
    for (let i = 0; i < contents.length; i++)
    blogpostContainer.innerHTML +=
                                        `<a href="blogspesific.html?id=${contents[i].id}" class="post">
                                        <h3>${contents[i].title.rendered}</h3>
                                        <img class="latestpicture" src="${contents[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${contents[i]._embedded['wp:featuredmedia']['0'].alt_text}">
                                        <p>${contents[i].excerpt.rendered}</p>
                                        </a>` ;
}


