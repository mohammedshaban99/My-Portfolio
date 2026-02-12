import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="section" aria-labelledby="projects-heading">
      <div class="section__container">
        <h2 id="projects-heading" class="section__heading">
          <span class="section__heading-number">04.</span>
          Things I've Built
          <span class="section__heading-line"></span>
        </h2>

        <div class="projects__list">
          @for (project of projects; track project.title; let i = $index) {
            <article class="project" [class.project--reverse]="i % 2 !== 0">
              <div class="project__content">
                <p class="project__overline">Featured Project</p>
                <h3 class="project__title">{{ project.title }}</h3>
                <div class="project__description">
                  <p>{{ project.description }}</p>
                </div>
                <ul class="project__tech" role="list">
                  @for (tech of project.tech; track tech) {
                    <li>{{ tech }}</li>
                  }
                </ul>
                <div class="project__links">
                  @if (project.github) {
                    <a
                      [href]="project.github"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="project__link"
                      aria-label="View source code on GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                  }
                  @if (project.demo) {
                    <a
                      [href]="project.demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="project__link"
                      aria-label="View live demo"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                    </a>
                  }
                </div>
              </div>
            </article>
          }
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

      .projects__list {
        display: flex;
        flex-direction: column;
        gap: 48px;
      }

      .project {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 6px;
        padding: 32px;
        transition: all 0.3s ease;
      }

      .project:hover {
        border-color: var(--accent);
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
      }

      .project__overline {
        font-family: var(--font-mono);
        font-size: 0.8125rem;
        color: var(--accent);
        margin-bottom: 8px;
      }

      .project__title {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 16px;
      }

      .project__title:hover {
        color: var(--accent);
      }

      .project__description {
        margin-bottom: 20px;
      }

      .project__description p {
        font-size: 0.9375rem;
        color: var(--text-secondary);
        line-height: 1.7;
      }

      .project__tech {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        list-style: none;
        margin-bottom: 20px;
      }

      .project__tech li {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--accent);
        background: var(--accent-dim);
        padding: 4px 10px;
        border-radius: 3px;
      }

      .project__links {
        display: flex;
        gap: 16px;
      }

      .project__link {
        color: var(--text-secondary);
        transition: all 0.2s ease;
      }

      .project__link:hover {
        color: var(--accent);
        transform: translateY(-2px);
      }
    `,
  ],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Blazor Application',
      description:
        'Developed a modern Blazor Server (.NET 9) web app with interactive UI, secure user authentication (Google, Facebook, Microsoft), product/category management, shopping cart, order processing, and Stripe payment integration. Utilized Radzen UI components, Entity Framework Core with SQL Server, and ASP.NET Identity for authentication and authorization.',
      tech: [
        'Blazor Server',
        '.NET 9',
        'Radzen UI',
        'EF Core',
        'SQL Server',
        'Stripe',
        'ASP.NET Identity',
      ],
      github: 'https://github.com/mohammedshaban99',
    },
    {
      title: 'Library Management System',
      description:
        'Built a .NET 8 Web API for managing books, users, and borrowing records with JWT authentication, role-based access, and Entity Framework Core. Implemented design patterns like Repository, Unit of Work, and Strategy for maintainability and scalability.',
      tech: [
        '.NET 8 Web API',
        'JWT Auth',
        'EF Core',
        'SQL Server',
        'Repository Pattern',
        'Unit of Work',
      ],
      github: 'https://github.com/mohammedshaban99',
    },
    {
      title: 'Online Store',
      description:
        'A modern e-commerce web application built with Angular. A full-featured online shopping platform that allows customers to browse products, filter by category, search for items, manage a shopping cart, and handle user authentication.',
      tech: [
        'Angular',
        'TypeScript',
        'Bootstrap',
        'REST API',
        'RxJS',
      ],
      github: 'https://github.com/mohammedshaban99',
    },
  ];
}
