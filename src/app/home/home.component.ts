import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateService } from '../services/date.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  countdown: any;
  private intervalId: any;

  constructor(private dateService: DateService, private router: Router) { }

  ngOnInit(): void {
    // Redirect to birthday view if today is the birthday
    if (this.dateService.isBirthdayToday()) {
      this.router.navigate(['/birthday']);
    } else {
      // Start live countdown
      this.startCountdown();
    }
  }

  startCountdown() {
    this.updateCountdown(); // Initial update
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000); // Update every second
  }

  updateCountdown() {
    this.countdown = this.dateService.getTimeUntilBirthday();

    // Redirect to the birthday view if the countdown reaches 0
    if (
      this.countdown.days === 0 &&
      this.countdown.hours === 0 &&
      this.countdown.minutes === 0 &&
      this.countdown.seconds === 0
    ) {
      this.router.navigate(['/birthday']);
      clearInterval(this.intervalId); // Stop the interval
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clean up the interval on component destroy
    }
  }
}
