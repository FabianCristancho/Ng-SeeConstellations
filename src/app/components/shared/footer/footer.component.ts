import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear:number = 0;
  date:Date = new Date();

  constructor() {
    this.currentYear = this.date.getFullYear();
   }

  ngOnInit(): void {
  }

}
