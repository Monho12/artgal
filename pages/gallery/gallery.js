import miniArtCard from "/components/miniArtCard/miniArtCard.js";
import Header from "/components/header/header.js";
import { Footer } from "/components/footer/footer.js";

document.getElementById("header").innerHTML = Header();
document.getElementById("footer").innerHTML = Footer();

fetch('./art.json')
    .then(res => res.json())
    .then(data => {
        document.getElementById("featured").innerHTML = miniArtCard(data[0]);

        document.getElementById("mini-gallery").innerHTML = data
            .slice(1)
            .map(art => miniArtCard(art))
            .join("");
    })
    .catch(error => {
        console.error("Error loading gallery:", error);
    });