import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <div class="brand">✔ Task<span>Flow</span></div>
      <ul>
        <li><a href="#">Tâches</a></li>
        <li><a href="#">À propos</a></li>
      </ul>
    </nav>
  `,
  styles: `
    :host { display: block; background: linear-gradient(90deg, #4f46e5, #7c3aed); box-shadow: 0 2px 12px rgba(79, 70, 229, 0.3); }
    nav { max-width: 760px; margin: 0 auto; padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; }
    .brand { color: #fff; font-size: 1.3rem; font-weight: 700; letter-spacing: 0.3px; }
    .brand span { font-weight: 300; }
    ul { list-style: none; display: flex; gap: 8px; margin: 0; padding: 0; }
    a { color: #e0e7ff; text-decoration: none; padding: 8px 14px; border-radius: 8px; font-weight: 500; transition: background 0.2s; }
    a:hover { background: rgba(255, 255, 255, 0.18); color: #fff; }
  `
})
export class Navbar {}