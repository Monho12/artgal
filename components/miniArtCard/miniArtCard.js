export default function miniArtCard({ title, year, image, }) {
  return /*html*/`
    <link rel="stylesheet" href="/components/miniArtCard/miniArtCard.css">
    <article class="card">
      <img class="miniImg"src="${image}" alt="${title}">
      <footer class="card-info">
        <p class="date">${year}</p>
        <h2 class="title">${title}</h2>
      </footer>
    </article>
  `;
}