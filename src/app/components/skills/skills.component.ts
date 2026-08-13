import { Component } from '@angular/core';


interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
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
