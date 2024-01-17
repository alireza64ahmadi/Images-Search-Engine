const accessKey = "UBAZgVD0-Ji-d1C-gq-cKn3HxkjZwJLuE6Hcxb_nwXg";


const searchForm = document.querySelector("#search-form")
const searchBox = document.querySelector("#search-box")
const searchResult = document.querySelector("#search-result")
const showMoreBtn = document.querySelector("#show-more-btn")

let keyword = "";
let page = 1;


async function searchImages(){
    keyword = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img")
        image.src = result.urls.small;
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
        
    })
}


searchForm.addEventListener("submit" , (e) => {
    e.preventDefault()
    page = 1;
    searchImages()
})

