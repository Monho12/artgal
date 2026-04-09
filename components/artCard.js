export default function artCart({ title, artist, description, image, id }) {
  return `<article>
          <h2>${title}</h2>
          <h3>${artist}</h3>
          <p>${description}</p>
          <img src="${image}" alt="${title}">
        </article>`
}