
import { Footer } from "./components/footer/footer.js";
import Header from "./components/header/header.js";
import miniArtCard from "./components/miniArtCard/miniArtCard.js";

function App(arts) {
  return /*html */`${Header()}
      <main class="main-container">
      <h1>The Collection</h1>
      <p>
        Explore our collection of artworks, connect with artists, and share your
        own creations.
      </p>

      <section class="gallery">
        <h4>Category</h4>
        <fieldset>
          <p>All</p>
          <p>Digital</p>
          <p>Photography</p>
        </fieldset>
        <h4>Artists</h4>
        <fieldset>
          <p>Curated</p>
          <p>Emerging</p>
        </fieldset>
      </section>

      <section class="arts-grid">
        ${arts.map(art => miniArtCard(art)).join("")}
      </section>
    </main>
    ${Footer()}`
}

fetch("/pages/gallery/art.json")
  .then(res => res.json())
  .then(data => {
    document.querySelector("#app").innerHTML = App(data);
  })
  .catch(err => {
    console.error("Error loading artworks:", err);
    document.querySelector("#app").innerHTML = App([]);
  });

document.querySelector('#app').innerHTML = App();