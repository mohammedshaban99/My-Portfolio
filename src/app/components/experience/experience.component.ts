import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="section" aria-labelledby="experience-heading">
      <div class="section__container">
        <h2 id="experience-heading" class="section__heading">
          <span class="section__heading-number">03.</span>
          Where I've Worked
          <span class="section__heading-line"></span>
        </h2>

        <div class="experience__card">
          <div class="experience__header">
            <h3 class="experience__role">
              .NET Developer
              <span class="experience__company">
                &#64; <a href="#" class="experience__company-link">Dexef</a>
              </span>
            </h3>
            <p class="experience__date">April 2025 - Present</p>
          </div>

          <ul class="experience__list" role="list">
            <li class="experience__item">
              Built a responsive HR management system using DevExpress Blazor UI components.
            </li>
            <li class="experience__item">
              Designed and implemented complex data grids with sorting, filtering, pagination, and inline editing.
            </li>
            <li class="experience__item">
              Collaborated with backend APIs to display and manage real-time HR data.
            </li>
          </ul>

          <div class="experience__tags">
            <span class="experience__tag">Blazor</span>
            <span class="experience__tag">DevExpress</span>
            <span class="experience__tag">.NET</span>
            <span class="experience__tag">C#</span>
            <span class="experience__tag">REST APIs</span>
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

      .experience__card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 6px;
        padding: 32px;
        border-left: 3px solid var(--accent);
        transition: all 0.3s ease;
      }

      .experience__card:hover {
        border-color: var(--accent);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
      }

      .experience__header {
        margin-bottom: 20px;
      }

      .experience__role {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 4px;
      }

      .experience__company {
        color: var(--text-secondary);
        font-weight: 400;
      }

      .experience__company-link {
        color: var(--accent);
        font-weight: 500;
      }

      .experience__date {
        font-family: var(--font-mono);
        font-size: 0.8125rem;
        color: var(--text-muted);
      }

      .experience__list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 20px;
      }

      .experience__item {
        font-size: 0.9375rem;
        color: var(--text-secondary);
        line-height: 1.6;
        padding-left: 24px;
        position: relative;
      }

      .experience__item::before {
        content: '>';
        position: absolute;
        left: 0;
        color: var(--accent);
        font-family: var(--font-mono);
        font-size: 0.875rem;
      }

      .experience__tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .experience__tag {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--accent);
        background: var(--accent-dim);
        padding: 4px 10px;
        border-radius: 3px;
      }
    `,
  ],
})
export class ExperienceComponent {}
