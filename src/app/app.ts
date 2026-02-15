import { Component, signal, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit {
  ngOnInit() {
    // Basic initialization if needed
  }

  ngAfterViewInit() {
    // Small timeout to ensure Angular has finished rendering the @for blocks
    setTimeout(() => {
      this.initAnimations();
    }, 200);
  }

  initAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once it's active, we can stop observing it
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all possible reveal classes
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach((el) => observer.observe(el));
  }

  profile = signal({
    name: 'Mohamed Nawasudeen',
    title: 'Frontend / Full Stack Developer',
    experience: '4.5 Years',
    email: 'nawasjasra6@gmail.com',
    phone: '+91-6380869613',
    linkedin: 'https://linkedin.com/in/mohammed-nawasudeen-344269208',
    summary: 'Frontend / Full Stack Developer with 4.5 years of professional experience in building scalable, high-performance web applications. Strong expertise in Angular, TypeScript, JavaScript (ES6+), HTML5, CSS3, and modern UI frameworks including Angular Material, Bootstrap, and Tailwind. Proven experience delivering Insurance domain applications, POS systems, dashboards, and enterprise-grade products.',
    education: {
      degree: 'B.Sc. Information Technology',
      period: '2018 – 2021',
      college: 'Jamal Mohamed College, Tiruchirappalli'
    },
    domains: [
      'General / Non-Life Insurance',
      'POS & Billing Systems',
      'Subscription Platforms',
      'Dashboard & Reporting Systems'
    ],
    skills: {
      frontend: ['Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Angular Material', 'Bootstrap', 'Tailwind'],
      backend: ['Java', 'Spring Boot', 'REST APIs', 'SQL'],
      tools: ['Git', 'GitHub', 'Postman', 'VS Code'],
      ai: ['GitHub Copilot', 'ChatGPT', 'DeepSeek', 'Cursor']
    }
  });

  experiences = signal([
    {
      company: 'KG Information Systems Ltd (Product Based)',
      role: 'Frontend Developer',
      period: 'Jun 2023 – Present',
      highlights: [
        'Working on enterprise-level General Insurance products using Angular.',
        'Enhanced insurance modules including Motor, Fire, Marine, Personal Accident, and Travel Insurance.',
        'Built dynamic forms, premium calculations, validations, and workflow-based screens.',
        'Integrated backend APIs and handled complex JSON mappings.'
      ],
      projects: [
        { name: 'Nsure Core General', description: 'Core platform for Non-Life Insurance products.' },
        { name: 'A Insurance (Myanmar Client)', description: 'General insurance solution with full policy lifecycle management.' },
        { name: 'KBZMS Insurance (Myanmar Client)', description: 'Insurance system with product configuration and underwriting workflows.' }
      ]
    },
    {
      company: 'Ahsan Solutions',
      role: 'Full Stack Developer',
      period: 'Sep 2021 – Sep 2023',
      highlights: [
        'Developed full-stack web applications using Angular and Java.',
        'Designed reusable UI components and responsive layouts.',
        'Built REST APIs and managed SQL databases.',
        'Created dynamic dashboards and invoice generation modules.'
      ],
      projects: [
        { name: 'Adhirstam Admin Panel', description: 'Jewelry POS system for stock, billing, GST invoices, and reports.' },
        { name: 'Playoll', description: 'Game slot booking and match management application.' },
        { name: 'Wolf Nutrition', description: 'Subscription-based nutrition and food package platform.' },
        { name: 'BulbKadai POS', description: 'Franchise-based electrical shop POS with complex workflows.' }
      ]
    }
  ]);

  techStacks = signal([
    { name: 'Angular', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg' },
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
    { name: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
    { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' }
  ]);
}
