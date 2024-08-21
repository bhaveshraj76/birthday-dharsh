import { Component, OnInit, OnDestroy} from '@angular/core';
import { DateService } from '../services/date.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birthday',
  standalone: true,
  imports: [],
  templateUrl: './birthday.component.html',
  styleUrl: './birthday.component.css'
})
export class BirthdayComponent {

  constructor (
    private dateService: DateService,
    private route: Router,
  ) { }

  date: any;
  interval:any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.checkDateValidity();

    this.interval = setInterval(() => {
      this.checkDateValidity()
    }, 1000)
  }

  checkDateValidity(){
    this.date = this.dateService.getDaysUntilBirthday();
    console.log(this.date);

    let valid_days = [365, 366];

    if (this.date != 365 && this.date != 366){
      this.route.navigateByUrl("/")
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

}
