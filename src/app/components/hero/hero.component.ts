import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero" aria-label="Introduction">
      <div class="hero__container">
        <p class="hero__greeting">Hi, my name is</p>
        <h1 class="hero__name">Mohamed Shaban.</h1>
        <h2 class="hero__tagline">I build things for the web.</h2>
        <p class="hero__description">
          I'm a full-stack .NET developer specializing in building exceptional
          web applications. Currently focused on creating scalable, secure
          systems with
          <strong>ASP.NET Core</strong>, <strong>Angular</strong>, and
          <strong>Blazor</strong>.
        </p>
        <div class="hero__cta">
          <a href="#projects" class="hero__btn hero__btn--primary">
            View My Work
          </a>
          <a href="#contact" class="hero__btn hero__btn--outline">
            Get In Touch
          </a>
        </div>
      </div>

      <div class="hero__side-email">
        <a href="mailto:mohammedshaban1458&#64;gmail.com">
          mohammedshaban1458&#64;gmail.com
        </a>
      </div>

      <div class="hero__side-socials">
        <a
          href="https://github.com/mohammedshaban99"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
        <a
          href="https://linkedin.com/in/mohammedshaban99"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        padding: 0 clamp(24px, 5vw, 48px);
        position: relative;
      }

      .hero__container {
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        padding-top: 70px;
      }

      .hero__greeting {
        font-family: var(--font-mono);
        font-size: 1rem;
        color: var(--accent);
        margin-bottom: 20px;
        animation: fadeUp 0.5s ease 0.2s both;
      }

      .hero__name {
        font-size: clamp(2.5rem, 7vw, 4.5rem);
        font-weight: 700;
        color: var(--text-primary);
        line-height: 1.1;
        margin-bottom: 8px;
        animation: fadeUp 0.5s ease 0.4s both;
      }

      .hero__tagline {
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 700;
        color: var(--text-muted);
        line-height: 1.1;
        margin-bottom: 24px;
        animation: fadeUp 0.5s ease 0.6s both;
      }

      .hero__description {
        max-width: 540px;
        font-size: 1.0625rem;
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 40px;
        animation: fadeUp 0.5s ease 0.8s both;
      }

      .hero__description strong {
        color: var(--accent);
        font-weight: 500;
      }

      .hero__cta {
        display: flex;
        gap: 16px;
        animation: fadeUp 0.5s ease 1s both;
      }

      .hero__btn {
        font-family: var(--font-mono);
        font-size: 0.875rem;
        padding: 14px 28px;
        border-radius: 4px;
        transition: all 0.2s ease;
        display: inline-block;
      }

      .hero__btn--primary {
        background: var(--accent);
        color: var(--bg-deep);
        font-weight: 600;
      }

      .hero__btn--primary:hover {
        background: var(--accent-hover);
        color: var(--bg-deep);
        transform: translateY(-2px);
        box-shadow: 0 4px 20px rgba(78, 225, 160, 0.3);
      }

      .hero__btn--outline {
        border: 1px solid var(--accent);
        color: var(--accent);
      }

      .hero__btn--outline:hover {
        background: var(--accent-dim);
        transform: translateY(-2px);
      }

      .hero__side-email,
      .hero__side-socials {
        position: fixed;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }

      .hero__side-email {
        right: 40px;
      }

      .hero__side-email::after,
      .hero__side-socials::after {
        content: '';
        width: 1px;
        height: 90px;
        background: var(--text-muted);
      }

      .hero__side-email a {
        writing-mode: vertical-rl;
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-secondary);
        letter-spacing: 0.1em;
        transition: all 0.2s ease;
      }

      .hero__side-email a:hover {
        color: var(--accent);
        transform: translateY(-3px);
      }

      .hero__side-socials {
        left: 40px;
      }

      .hero__side-socials a {
        color: var(--text-secondary);
        transition: all 0.2s ease;
      }

      .hero__side-socials a:hover {
        color: var(--accent);
        transform: translateY(-3px);
      }

      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media (max-width: 1080px) {
        .hero__side-email,
        .hero__side-socials {
          display: none;
        }
      }

      @media (max-width: 480px) {
        .hero__cta {
          flex-direction: column;
        }

        .hero__btn {
          text-align: center;
        }
      }
    `,
  ],
})
export class HeroComponent {}
