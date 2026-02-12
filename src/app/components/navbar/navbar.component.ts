import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header
      class="navbar"
      [class.navbar--scrolled]="isScrolled()"
      role="banner"
    >
      <nav class="navbar__inner" aria-label="Main navigation">
        <a href="#" class="navbar__logo" aria-label="Home">
          <svg class="navbar__logo-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        </a>

        <button
          class="navbar__toggle"
          (click)="toggleMenu()"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="nav-menu"
          aria-label="Toggle navigation menu"
        >
          <span class="navbar__toggle-line" [class.open]="menuOpen()"></span>
          <span class="navbar__toggle-line" [class.open]="menuOpen()"></span>
          <span class="navbar__toggle-line" [class.open]="menuOpen()"></span>
        </button>

        <ul
          id="nav-menu"
          class="navbar__links"
          [class.navbar__links--open]="menuOpen()"
          role="list"
        >
          @for (link of navLinks; track link.label) {
            <li>
              <a
                [href]="link.href"
                class="navbar__link"
                (click)="closeMenu()"
              >
                {{ link.label }}
              </a>
            </li>
          }
          <li>
            <a
              href="/Mohamed_Shaban_Resume.pdf"
              class="navbar__resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [
    `
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        padding: 0 clamp(24px, 5vw, 48px);
        height: 70px;
        display: flex;
        align-items: center;
        transition: all 0.3s ease;
        background: transparent;
      }

      .navbar--scrolled {
        background: rgba(10, 15, 26, 0.85);
        backdrop-filter: blur(12px);
        box-shadow: 0 1px 0 var(--border);
      }

      .navbar__inner {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .navbar__logo {
        display: flex;
        align-items: center;
        color: var(--accent);
        transition: opacity 0.2s ease;
      }

      .navbar__logo:hover {
        opacity: 0.8;
      }

      .navbar__logo-icon {
        width: 28px;
        height: 28px;
      }

      .navbar__links {
        display: flex;
        align-items: center;
        gap: 32px;
        list-style: none;
      }

      .navbar__link {
        font-size: 0.875rem;
        color: var(--text-secondary);
        font-weight: 400;
        transition: color 0.2s ease;
      }

      .navbar__link:hover {
        color: var(--accent);
      }

      .navbar__resume-btn {
        font-family: var(--font-mono);
        font-size: 0.8125rem;
        color: var(--accent);
        border: 1px solid var(--accent);
        padding: 8px 16px;
        border-radius: 4px;
        transition: all 0.2s ease;
      }

      .navbar__resume-btn:hover {
        background: var(--accent-dim);
      }

      .navbar__toggle {
        display: none;
        flex-direction: column;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        z-index: 101;
      }

      .navbar__toggle-line {
        display: block;
        width: 24px;
        height: 2px;
        background: var(--accent);
        border-radius: 2px;
        transition: all 0.3s ease;
      }

      .navbar__toggle-line.open:first-child {
        transform: rotate(45deg) translate(5px, 5px);
      }

      .navbar__toggle-line.open:nth-child(2) {
        opacity: 0;
      }

      .navbar__toggle-line.open:last-child {
        transform: rotate(-45deg) translate(5px, -5px);
      }

      @media (max-width: 768px) {
        .navbar__toggle {
          display: flex;
        }

        .navbar__links {
          position: fixed;
          top: 0;
          right: -100%;
          width: 70%;
          max-width: 320px;
          height: 100vh;
          background: var(--bg-card);
          flex-direction: column;
          justify-content: center;
          gap: 24px;
          padding: 24px;
          transition: right 0.3s ease;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
        }

        .navbar__links--open {
          right: 0;
        }
      }
    `,
  ],
})
export class NavbarComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);

  navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
