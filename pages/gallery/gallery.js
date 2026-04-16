import artCard from "/components/artCard/artCard.js";
import miniArtCard from "/components/miniArtCard/miniArtCard.js";

const url = './art.json'

fetch(url)
    .then(response => response.json())
    .then(data => {
        const gal = document.getElementById("gallery");
        const miniGal = document.getElementById("mini-gallery");

        gal.innerHTML = data.map(art => artCard(art)).join("");
        miniGal.innerHTML = data.map(art => miniArtCard(art)).join("");

    })
    .catch(error => {
        console.log("Error loading gallery:", error);
    });
