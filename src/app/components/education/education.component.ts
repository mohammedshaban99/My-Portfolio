import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  template: `
    <section id="education" class="section" aria-labelledby="education-heading">
      <div class="section__container">
        <h2 id="education-heading" class="section__heading">
          <span class="section__heading-number">05.</span>
          Education
          <span class="section__heading-line"></span>
        </h2>

        <div class="education__card">
          <div class="education__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <div class="education__content">
            <h3 class="education__degree">Bachelor of Electronic Engineering</h3>
            <p class="education__school">Menofia University</p>
            <p class="education__detail">Major in Computer Science and Engineering</p>
            <div class="education__meta">
              <span class="education__date">September 2019 - July 2024</span>
              <span class="education__divider">|</span>
              <span class="education__location">Menof, Egypt</span>
            </div>
            <div class="education__grade">
              <span class="education__grade-label">Grade:</span>
              Very Good (GPA: 3.2 / 4)
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

      .education__card {
        display: flex;
        gap: 24px;
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 6px;
        padding: 32px;
        transition: all 0.3s ease;
      }

      .education__card:hover {
        border-color: var(--accent);
        transform: translateY(-4px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
      }

      .education__icon {
        flex-shrink: 0;
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--accent-dim);
        border-radius: 12px;
        color: var(--accent);
      }

      .education__degree {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 4px;
      }

      .education__school {
        font-size: 1.0625rem;
        color: var(--accent);
        font-weight: 500;
        margin-bottom: 4px;
      }

      .education__detail {
        font-size: 0.9375rem;
        color: var(--text-secondary);
        margin-bottom: 12px;
      }

      .education__meta {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: var(--font-mono);
        font-size: 0.8125rem;
        color: var(--text-muted);
        margin-bottom: 12px;
      }

      .education__divider {
        color: var(--border);
      }

      .education__grade {
        font-family: var(--font-mono);
        font-size: 0.875rem;
        color: var(--text-secondary);
        background: var(--accent-dim);
        display: inline-block;
        padding: 6px 14px;
        border-radius: 4px;
      }

      .education__grade-label {
        color: var(--accent);
        font-weight: 600;
        margin-right: 4px;
      }

      @media (max-width: 640px) {
        .education__card {
          flex-direction: column;
          align-items: flex-start;
        }

        .education__meta {
          flex-wrap: wrap;
        }
      }
    `,
  ],
})
export class EducationComponent {}
