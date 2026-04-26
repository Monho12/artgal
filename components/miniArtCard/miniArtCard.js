export default function miniArtCard({ title, year, image, id }) {
  return /*html*/`
    <link rel="stylesheet" href="/components/miniArtCard/miniArtCard.css">
    
    <a href="/pages/artDetail/artDetail.html?id=${id}" class="card">
      <img class="miniImg" src="${image}" alt="${title}">
      <footer class="card-info">
        <p class="date">${year}</p>
        <h2 class="title">${title}</h2>
      </footer>
    </a>
  `;
}