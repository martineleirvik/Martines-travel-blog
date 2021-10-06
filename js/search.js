import {renderItems} from './blogpage.js';
let data = [];
let filteredData = [];

const url = "https://www.flowerpower-ml.no/wp-json/wp/v2/posts?_embed&per_page=100";
const blogpostContainer = document.querySelector(".blogposts");


const form = document.querySelector('form.searchform');

async function getStuffFromAPI(url) {
  try {
    const response = await fetch(url);
    const contents = await response.json();
    return contents;
  } catch(error) {
    console.warn();('Something went wrong', error);
    return [];
  }
}

function onSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const searchValue = form.search.value.toLowerCase;
  console.log(searchValue);
  filterContentsBySearchTerm(searchValue);
}

function filterContentsBySearchTerm(term) {
  filteredData = data.filter(function(item) {
    return item.property.contains(term);
  });

  renderItems(filteredData);
}

async function main() {
  data = await getStuffFromAPI(url);
  renderItems(data);
  document.querySelector('form.searchform').addEventListener('submit', onSubmit);
}

main();