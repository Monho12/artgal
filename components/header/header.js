export default function Header() {
  return /*html*/ `
  <link rel="stylesheet" href="./components/header/header.css">
    <header class="main-header">
      <p class="logo">Artgal</p>

      <ul class="nav-links">
        <li><a href="./main.html">Home</a></li>
        <li><a href="../pages/gallery/gallery.html">Gallery</a></li>
      </ul>

      <div class="auth-links">
        <a href="./login.html">Login</a>
        <a href="./signup.html">Sign up</a>
      </div>
    </header>
  `;
}