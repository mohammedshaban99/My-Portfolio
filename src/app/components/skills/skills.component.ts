import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="section" aria-labelledby="skills-heading">
      <div class="section__container">
        <h2 id="skills-heading" class="section__heading">
          <span class="section__heading-number">02.</span>
          Skills &amp; Technologies
          <span class="section__heading-line"></span>
        </h2>

        <div class="skills__grid">
          @for (category of categories; track category.title) {
            <div class="skills__card">
              <div class="skills__card-icon">{{ category.icon }}</div>
              <h3 class="skills__card-title">{{ category.title }}</h3>
              <ul class="skills__list" role="list">
                @for (skill of category.skills; track skill) {
                  <li class="skills__item">{{ skill }}</li>
                }
              </ul>
            </div>
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

      .skills__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 24px;
      }

      .skills__card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 6px;
        padding: 28px;
        transition: all 0.3s ease;
      }

      .skills__card:hover {
        border-color: var(--accent);
        transform: translateY(-4px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
      }

      .skills__card-icon {
        font-size: 1.5rem;
        margin-bottom: 16px;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--accent-dim);
        border-radius: 8px;
        font-family: var(--font-mono);
        color: var(--accent);
        font-weight: 700;
      }

      .skills__card-title {
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 16px;
      }

      .skills__list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .skills__item {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-secondary);
        background: var(--bg-deep);
        padding: 4px 10px;
        border-radius: 3px;
        border: 1px solid var(--border);
      }
    `,
  ],
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'Backend',
      icon: '{}',
      skills: [
        'C#',
        'C',
        'C++',
        'ASP.NET Core',
        'Web API',
        'MVC',
      ],
    },
    {
      title: 'Frontend',
      icon: '<>',
      skills: [
        'Angular',
        'Blazor',
        'TypeScript',
        'JavaScript',
        'Bootstrap',
        'Tailwind CSS',
        'HTML',
        'CSS',
      ],
    },
    {
      title: 'Database / ORM',
      icon: 'DB',
      skills: [
        'SQL Server',
        'Entity Framework Core',
        'LINQ',
      ],
    },
    {
      title: 'Concepts',
      icon: 'OO',
      skills: [
        'OOP',
        'SOLID Principles',
        'Design Patterns',
        'Unit Testing',
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: '>_',
      skills: [
        'Git',
        'GitHub',
        'Postman',
        'Swagger',
      ],
    },
    {
      title: 'Soft Skills',
      icon: 'SS',
      skills: [
        'Communication',
        'Leadership',
        'Time Management',
        'Critical Thinking',
        'Creativity',
        'B1 English',
      ],
    },
  ];
}
