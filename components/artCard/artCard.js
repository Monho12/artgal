export default function artCard({ title, artist, description, image, id }) {
  return /*html*/ `
    <link rel="stylesheet" href="./components/artCard/artCard.js.css">
    <article>
      <div>
        <img src="${image}" alt="${title}">
      </div>
      <div>
        <p>Current Exhibition</p>
        <h2>${title}</h2>
        <h3>${artist}</h3>
        <h4>${description}</h4>
      </div>
    </article>`
}