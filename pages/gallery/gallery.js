import miniArtCard from "/components/miniArtCard/miniArtCard.js";
import Header from "/components/header/header.js";
import { Footer } from "/components/footer/footer.js";

const url = './art.json'

function GalleryPage(data) {
    return /*html*/`
    ${Header()}
    <main class="gallery-grid" id="gallery"></main>
    ${Footer()}
  `
}

fetch(url)
    .then(response => response.json())
    .then(data => {
        document.body.innerHTML = GalleryPage(data);

        const gal = document.getElementById("gallery");
        gal.innerHTML = data.map(art => miniArtCard(art)).join("");
    })
    .catch(error => {
        console.log("Error loading gallery:", error);
    });


