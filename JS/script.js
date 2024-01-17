// Set access key for Unsplash API
const accessKey = "UBAZgVD0-Ji-d1C-gq-cKn3HxkjZwJLuE6Hcxb_nwXg";

// Select relevant DOM elements
const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");
const searchResult = document.querySelector("#search-result");
const showMoreBtn = document.querySelector("#show-more-btn");

// Initialize keyword and page variables
let keyword = "";
let page = 1;

// Asynchronous function to fetch and display images from the Unsplash API
async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    // Clear search results if it's a new search
    if (page === 1) {
        searchResult.innerHTML = "";
    }

    // Display fetched images
    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });

    // Display 'Show More' button
    showMoreBtn.style.display = "block";
}

// Event listener for search form submission
searchForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

// Event listener for 'Show More' button click
showMoreBtn.addEventListener("click" , () => {
    page++;
    searchImages();
});