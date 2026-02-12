import { Component, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
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
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('sectionHeading') sectionHeading!: ElementRef;
  @ViewChildren('skillCard') skillCards!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (this.sectionHeading) {
      observer.observe(this.sectionHeading.nativeElement);
    }

    this.skillCards.forEach((card, index) => {
      const el = card.nativeElement as HTMLElement;
      el.style.transitionDelay = `${index * 100}ms`;
      observer.observe(el);
    });
  }

  categories: SkillCategory[] = [
    {
      title: 'Backend',
      icon: '{}',
      skills: ['C#', 'C', 'C++', 'ASP.NET Core', 'Web API', 'MVC'],
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
      skills: ['SQL Server', 'Entity Framework Core', 'LINQ'],
    },
    {
      title: 'Concepts',
      icon: 'OO',
      skills: ['OOP', 'SOLID Principles', 'Design Patterns', 'Unit Testing'],
    },
    {
      title: 'Tools & DevOps',
      icon: '>_',
      skills: ['Git', 'GitHub', 'Postman', 'Swagger'],
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
