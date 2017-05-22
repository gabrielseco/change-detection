import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  config: { message: string };

  ngOnInit() {
    this.config = {
      message: 'Message'
    };
  }

  onChangeHandler() {
    this.config = {
      message: Math.random().toString(10)
    };
  }
}
