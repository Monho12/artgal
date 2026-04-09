import artCard from "./components/artCard.js";

const url = './art.json'

fetch(url)
    .then(response => response.json())
    .then(data => {
        const gal = document.getElementById("gallery");

        gal.innerHTML = data.map(art => artCard(art)).join("");

    })
    .catch(error => {
        console.log("Error loading gallery:", error);
    });
