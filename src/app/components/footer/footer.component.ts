import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer" role="contentinfo">
      <div class="footer__inner">
        <p class="footer__text">
          Designed &amp; Built by
          <a
            href="https://github.com/mohammedshaban99"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mohamed Shaban
          </a>
        </p>
        <p class="footer__sub">
          Built with Angular &amp; lots of coffee.
        </p>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        padding: 24px clamp(24px, 5vw, 48px);
        text-align: center;
      }

      .footer__inner {
        max-width: 1200px;
        margin: 0 auto;
      }

      .footer__text {
        font-family: var(--font-mono);
        font-size: 0.8125rem;
        color: var(--text-secondary);
        margin-bottom: 4px;
      }

      .footer__text a {
        color: var(--accent);
      }

      .footer__text a:hover {
        text-decoration: underline;
      }

      .footer__sub {
        font-family: var(--font-mono);
        font-size: 0.6875rem;
        color: var(--text-muted);
      }
    `,
  ],
})
export class FooterComponent {}
