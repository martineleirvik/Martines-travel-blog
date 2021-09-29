const url = "https://www.flowerpower-ml.no/wp-json/wp/v2/posts?_embed&per_page=100";
const imageSlider = document.querySelector(".slider");

async function getPosts() {

    try{
        const response = await fetch(url);
        const contents = await response.json();
        console.log(contents);

        imageSlider.innerHTML = "";

        for (let i = 0; i < contents.length; i++) {

            console.log(contents[i].title.rendered);
        
            if (i === 12) {
                break;
            }

            imageSlider.innerHTML +=
                                        `<a href="blogspesific.html?id=${contents[i].id}" class="slidercontent">
                                        <img class="sliderpicture" src="${contents[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${contents[i]._embedded['wp:featuredmedia']['0'].alt_text}">
                                        <p class="tx"> ${contents[i].title.rendered}</p>
                                        </a>`
        }
    }

    catch(error) {
        console.log(error);
        imageSlider.innerHTML += displayError();
    }
}

getPosts();

const btnRight = document.querySelector(".right-point");
const btnLeft = document.querySelector(".left-point");

const scrollLeft = Element.scrollLeft;

btnRight.onclick = function () {
    document.querySelector(".slider").scrollLeft += 250;
};

btnLeft.onclick = function () {
    document.querySelector(".slider").scrollLeft -= 250;
};