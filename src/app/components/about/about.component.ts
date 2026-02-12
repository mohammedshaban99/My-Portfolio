import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section" aria-labelledby="about-heading">
      <div class="section__container">
        <h2 id="about-heading" class="section__heading">
          <span class="section__heading-number">01.</span>
          About Me
          <span class="section__heading-line"></span>
        </h2>

        <div class="about__grid">
          <div class="about__text">
            <p>
              I am a motivated full-stack .NET developer with strong experience
              in <span class="highlight">ASP.NET Core</span>,
              <span class="highlight">Angular</span>, and
              <span class="highlight">Blazor</span>, passionate about building
              clean, scalable, and secure web applications.
            </p>
            <p>
              I enjoy learning new technologies, applying best practices, and
              solving real-world problems through software. My goal is to
              continuously improve my skills and contribute to impactful,
              high-quality projects.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul class="about__list" role="list">
              <li>ASP.NET Core (Web API, MVC)</li>
              <li>Angular &amp; TypeScript</li>
              <li>Blazor Server / WASM</li>
              <li>Entity Framework Core</li>
              <li>SQL Server</li>
              <li>C# / .NET 9</li>
            </ul>
          </div>

          <div class="about__image-wrapper">
            <div class="about__image-border"></div>
            <div class="about__image">
              <div class="about__avatar">
                <span class="about__avatar-initials">MS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .section {
        padding: 100px clamp(24px, 5vw, 48px);
      }

      .section__container {
        max-width: 900px;
        margin: 0 auto;
      }

      .section__heading {
        display: flex;
        align-items: center;
        font-size: 1.75rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 40px;
        white-space: nowrap;
      }

      .section__heading-number {
        font-family: var(--font-mono);
        font-size: 1.25rem;
        font-weight: 400;
        color: var(--accent);
        margin-right: 10px;
      }

      .section__heading-line {
        display: block;
        flex: 1;
        max-width: 300px;
        height: 1px;
        background: var(--border);
        margin-left: 20px;
      }

      .about__grid {
        display: grid;
        grid-template-columns: 3fr 2fr;
        gap: 50px;
        align-items: start;
      }

      .about__text p {
        font-size: 1rem;
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 16px;
      }

      .highlight {
        color: var(--accent);
        font-weight: 500;
      }

      .about__list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px 16px;
        list-style: none;
        margin-top: 20px;
      }

      .about__list li {
        font-family: var(--font-mono);
        font-size: 0.8125rem;
        color: var(--text-secondary);
        position: relative;
        padding-left: 20px;
      }

      .about__list li::before {
        content: '>';
        position: absolute;
        left: 0;
        color: var(--accent);
        font-size: 0.875rem;
      }

      .about__image-wrapper {
        position: relative;
        width: 100%;
        max-width: 280px;
        justify-self: center;
      }

      .about__image {
        position: relative;
        z-index: 1;
        border-radius: 6px;
        overflow: hidden;
        aspect-ratio: 1;
        background: var(--bg-card);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .about__image::after {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--accent-dim);
        transition: background 0.3s ease;
      }

      .about__image-wrapper:hover .about__image::after {
        background: transparent;
      }

      .about__image-border {
        position: absolute;
        top: 16px;
        left: 16px;
        width: 100%;
        height: 100%;
        border: 2px solid var(--accent);
        border-radius: 6px;
        z-index: 0;
        transition: all 0.3s ease;
      }

      .about__image-wrapper:hover .about__image-border {
        top: 10px;
        left: 10px;
      }

      .about__avatar {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-card-hover) 100%);
      }

      .about__avatar-initials {
        font-family: var(--font-mono);
        font-size: 4rem;
        font-weight: 700;
        color: var(--accent);
        opacity: 0.4;
      }

      @media (max-width: 768px) {
        .about__grid {
          grid-template-columns: 1fr;
        }

        .about__image-wrapper {
          max-width: 220px;
        }
      }
    `,
  ],
})
export class AboutComponent {}
