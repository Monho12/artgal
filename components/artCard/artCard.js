export default function artCard({ title, artist, description, image, id }) {
  return /*html*/`
    <link rel="stylesheet" href="/components/artCard/artCard.css">
    <article class="art-card" id="${id}" onclick="location.href='/pages/artDetail/artDetail.html?id=${id}'">
        <img src="${image}" alt="${title}">
      <div class="art-info">
        <h5>Current Exhibition</h5>
        <h1 class="art-title">${title}</h1>
        <h4 class="art-artist">${artist}</h4>
        <h4 class="art-description"><i>${description}</i></h4>
        <section class="art-buttons">
          <div>[icon] Save</div>
          <div>[icon] Like</div>
        </section>
      </div>
    </article>`
}