import artCard from "./components/artCard.js";

url = './art.json'

fetch(url)
    .then(response => response.json())
    .then(data => {
        const gal = document.getElementById("gallery");

        data.forEach(art => {
            artCard({ artist: art.artist, title: art.title, description: art.description, image: art.image, id: art.id });
        });

    })
    .catch(error => {
        console.log("Error loading gallery:", error);
    });
