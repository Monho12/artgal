<<<<<<< HEAD
import Header from "./components/header/header.js";
=======
import { Footer } from "./components/footer/footer.js";
import Header from "./components/header.js";
>>>>>>> 585d2ce81925b679f707ccd4cc7b0cc5b216e92b

export default function App() {
  return /*html*/ `${Header()}
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
    </main>
    ${Footer()}
`
}

document.querySelector('#app').innerHTML = App();