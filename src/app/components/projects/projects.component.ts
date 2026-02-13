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
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
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
      github: 'https://github.com/mohammedshaban99/E_Commerce-Solution',
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
      github: 'https://github.com/mohammedshaban99/Employee-Management-System',
    },
    {
      title: 'Online Store',
      description:
        'A modern e-commerce web application built with Angular. A full-featured online shopping platform that allows customers to browse products, filter by category, search for items, manage a shopping cart, and handle user authentication.',
      tech: ['Angular', 'TypeScript', 'Bootstrap', 'REST API', 'RxJS'],
      github: 'https://github.com/mohammedshaban99/Online-Store',
    },
  ];
}
