import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero" aria-label="Introduction">
      <div class="hero__glow hero__glow--1"></div>
      <div class="hero__glow hero__glow--2"></div>

      <div class="hero__container">
        <p class="hero__greeting">
          <span class="hero__greeting-dash">&mdash;</span> Hi, my name is
        </p>
        <h1 class="hero__name">Mohamed Shaban<span class="hero__dot">.</span></h1>

        <div class="hero__tagline-wrapper">
          <h2 class="hero__tagline">
            <span class="hero__tagline-static">I'm a&nbsp;</span>
            <span class="hero__typed-wrapper">
              <span class="hero__typed-text">{{ displayText() }}</span>
              <span class="hero__cursor" [class.hero__cursor--blink]="isWaiting()">|</span>
            </span>
          </h2>
        </div>

        <p class="hero__description">
          Specializing in building exceptional, scalable web applications
          with <strong>ASP.NET Core</strong>, <strong>Angular</strong>, and
          <strong>Blazor</strong>. I transform complex problems into elegant,
          performant solutions.
        </p>

        <div class="hero__cta">
          <a href="#projects" class="hero__btn hero__btn--primary">
            <span class="hero__btn-text">View My Work</span>
            <svg class="hero__btn-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
          </a>
          <a href="#contact" class="hero__btn hero__btn--outline">
            Get In Touch
          </a>
        </div>

        <div class="hero__stats">
          <div class="hero__stat">
            <span class="hero__stat-number">2+</span>
            <span class="hero__stat-label">Years Experience</span>
          </div>
          <div class="hero__stat-divider"></div>
          <div class="hero__stat">
            <span class="hero__stat-number">10+</span>
            <span class="hero__stat-label">Projects Built</span>
          </div>
          <div class="hero__stat-divider"></div>
          <div class="hero__stat">
            <span class="hero__stat-number">6+</span>
            <span class="hero__stat-label">Technologies</span>
          </div>
        </div>
      </div>

      <div class="hero__side-email">
        <a href="mailto:mohammedshaban1458&#64;gmail.com">
          mohammedshaban1458&#64;gmail.com
        </a>
      </div>

      <div class="hero__side-socials">
        <a
          href="https://github.com/mohammedshaban99"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
        <a
          href="https://linkedin.com/in/mohammedshaban99"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        padding: 0 clamp(24px, 5vw, 48px);
        position: relative;
        overflow: hidden;
      }

      .hero__glow {
        position: absolute;
        border-radius: 50%;
        filter: blur(120px);
        opacity: 0.07;
        pointer-events: none;
      }

      .hero__glow--1 {
        width: 600px;
        height: 600px;
        background: var(--accent);
        top: -200px;
        right: -100px;
      }

      .hero__glow--2 {
        width: 400px;
        height: 400px;
        background: #3b82f6;
        bottom: -100px;
        left: -100px;
      }

      .hero__container {
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        padding-top: 70px;
        position: relative;
        z-index: 1;
      }

      .hero__greeting {
        font-family: var(--font-mono);
        font-size: 1rem;
        color: var(--accent);
        margin-bottom: 20px;
        animation: fadeUp 0.6s ease 0.2s both;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .hero__greeting-dash {
        color: var(--accent);
        font-weight: 300;
      }

      .hero__name {
        font-size: clamp(2.5rem, 7vw, 4.5rem);
        font-weight: 700;
        color: var(--text-primary);
        line-height: 1.1;
        margin-bottom: 12px;
        animation: fadeUp 0.6s ease 0.4s both;
        letter-spacing: -0.02em;
      }

      .hero__dot {
        color: var(--accent);
      }

      .hero__tagline-wrapper {
        margin-bottom: 28px;
        animation: fadeUp 0.6s ease 0.6s both;
      }

      .hero__tagline {
        font-size: clamp(1.3rem, 3.5vw, 2.2rem);
        font-weight: 400;
        color: var(--text-muted);
        line-height: 1.3;
        display: flex;
        align-items: baseline;
        flex-wrap: wrap;
      }

      .hero__tagline-static {
        color: var(--text-muted);
      }

      .hero__typed-wrapper {
        display: inline-flex;
        align-items: baseline;
      }

      .hero__typed-text {
        color: var(--accent);
        font-weight: 600;
        position: relative;
      }

      .hero__cursor {
        color: var(--accent);
        font-weight: 300;
        margin-left: 1px;
        animation: none;
      }

      .hero__cursor--blink {
        animation: blink 0.7s step-end infinite;
      }

      .hero__description {
        max-width: 540px;
        font-size: 1.0625rem;
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 40px;
        animation: fadeUp 0.6s ease 0.8s both;
      }

      .hero__description strong {
        color: var(--accent);
        font-weight: 500;
      }

      .hero__cta {
        display: flex;
        gap: 16px;
        animation: fadeUp 0.6s ease 1s both;
        margin-bottom: 56px;
      }

      .hero__btn {
        font-family: var(--font-mono);
        font-size: 0.875rem;
        padding: 14px 28px;
        border-radius: 4px;
        transition: all 0.25s ease;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      .hero__btn--primary {
        background: var(--accent);
        color: var(--bg-deep);
        font-weight: 600;
      }

      .hero__btn--primary:hover {
        background: var(--accent-hover);
        color: var(--bg-deep);
        transform: translateY(-2px);
        box-shadow: 0 4px 24px rgba(78, 225, 160, 0.35);
      }

      .hero__btn--primary:hover .hero__btn-arrow {
        transform: translateX(3px);
      }

      .hero__btn-text {
        display: inline;
      }

      .hero__btn-arrow {
        transition: transform 0.25s ease;
      }

      .hero__btn--outline {
        border: 1px solid var(--accent);
        color: var(--accent);
      }

      .hero__btn--outline:hover {
        background: var(--accent-dim);
        transform: translateY(-2px);
      }

      .hero__stats {
        display: flex;
        align-items: center;
        gap: 32px;
        animation: fadeUp 0.6s ease 1.2s both;
      }

      .hero__stat {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .hero__stat-number {
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--text-primary);
        font-family: var(--font-mono);
        letter-spacing: -0.02em;
      }

      .hero__stat-label {
        font-size: 0.8rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }

      .hero__stat-divider {
        width: 1px;
        height: 40px;
        background: var(--border);
      }

      .hero__side-email,
      .hero__side-socials {
        position: fixed;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }

      .hero__side-email {
        right: 40px;
      }

      .hero__side-email::after,
      .hero__side-socials::after {
        content: '';
        width: 1px;
        height: 90px;
        background: var(--text-muted);
      }

      .hero__side-email a {
        writing-mode: vertical-rl;
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-secondary);
        letter-spacing: 0.1em;
        transition: all 0.2s ease;
      }

      .hero__side-email a:hover {
        color: var(--accent);
        transform: translateY(-3px);
      }

      .hero__side-socials {
        left: 40px;
      }

      .hero__side-socials a {
        color: var(--text-secondary);
        transition: all 0.2s ease;
      }

      .hero__side-socials a:hover {
        color: var(--accent);
        transform: translateY(-3px);
      }

      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }

      @media (max-width: 1080px) {
        .hero__side-email,
        .hero__side-socials {
          display: none;
        }
      }

      @media (max-width: 640px) {
        .hero__stats {
          gap: 20px;
        }

        .hero__stat-number {
          font-size: 1.35rem;
        }

        .hero__stat-label {
          font-size: 0.7rem;
        }

        .hero__stat-divider {
          height: 32px;
        }
      }

      @media (max-width: 480px) {
        .hero__cta {
          flex-direction: column;
        }

        .hero__btn {
          text-align: center;
          justify-content: center;
        }

        .hero__stats {
          flex-wrap: wrap;
          gap: 16px;
        }

        .hero__stat-divider {
          display: none;
        }
      }
    `,
  ],
})
export class HeroComponent implements OnInit, OnDestroy {
  titles = [
    'Full Stack .NET Developer',
    'Backend Engineer',
    'Angular Developer',
    'Blazor Specialist',
    'Problem Solver',
  ];

  displayText = signal('');
  isWaiting = signal(true);

  private currentIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;
  private readonly typeSpeed = 80;
  private readonly deleteSpeed = 45;
  private readonly pauseAfterType = 2200;
  private readonly pauseAfterDelete = 500;

  ngOnInit(): void {
    this.timeoutId = setTimeout(() => this.type(), 1400);
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private type(): void {
    const currentTitle = this.titles[this.currentIndex];

    if (!this.isDeleting) {
      this.isWaiting.set(false);
      this.currentCharIndex++;
      this.displayText.set(currentTitle.substring(0, this.currentCharIndex));

      if (this.currentCharIndex === currentTitle.length) {
        this.isWaiting.set(true);
        this.timeoutId = setTimeout(() => {
          this.isDeleting = true;
          this.type();
        }, this.pauseAfterType);
        return;
      }

      this.timeoutId = setTimeout(() => this.type(), this.typeSpeed);
    } else {
      this.isWaiting.set(false);
      this.currentCharIndex--;
      this.displayText.set(currentTitle.substring(0, this.currentCharIndex));

      if (this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.titles.length;
        this.isWaiting.set(true);
        this.timeoutId = setTimeout(() => this.type(), this.pauseAfterDelete);
        return;
      }

      this.timeoutId = setTimeout(() => this.type(), this.deleteSpeed);
    }
  }
}
