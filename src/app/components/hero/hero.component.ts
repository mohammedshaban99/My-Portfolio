import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit, OnDestroy {
  titles = [
    'Full Stack .NET Developer',
    'Software Engineer',
    'Angular Developer',
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
