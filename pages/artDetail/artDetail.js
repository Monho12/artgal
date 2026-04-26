import artCard from "../../components/artCard/artCard.js";
import { Footer } from "../../components/footer/footer.js";
import Header from "../../components/header/header.js";

function showDetailPage(art) {
  return /*html */ `${Header()}
            <main class="main-container">
              ${artCard(art)}
            </main>
          ${Footer()}`;
}

fetch("/pages/gallery/art.json")
  .then((res) => res.json())
  .then((data) => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const art = data.find((a) => a.id === id);

    document.body.innerHTML = art
      ? showDetailPage(art)
      : "<p>Artwork not found.</p>";
  });