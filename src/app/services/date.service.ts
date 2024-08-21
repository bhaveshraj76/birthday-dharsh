import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private birthdayDate = new Date(new Date().getFullYear(), 7, 22);

  constructor() { }

  isBirthdayToday(): boolean {
    const today = new Date();
    return today.getDate() === this.birthdayDate.getDate() &&
           today.getMonth() === this.birthdayDate.getMonth();
  }

  getTimeUntilBirthday() {
    const today = new Date();
    let nextBirthday = new Date(today.getFullYear(), this.birthdayDate.getMonth(), this.birthdayDate.getDate(), 0, 0, 0);

    // If the birthday has already passed this year, move to next year
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = nextBirthday.getTime() - today.getTime();

    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  getDaysUntilBirthday(): number {
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), this.birthdayDate.getMonth(), this.birthdayDate.getDate());

    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = nextBirthday.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}
