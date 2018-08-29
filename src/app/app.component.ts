import { Component, OnInit } from '@angular/core';
import { ConditionalFormattingService } from './conditional-formatting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(public _formattingService: ConditionalFormattingService) { }

  valueArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3.2, 8.6, 5.3];
  conditionalColorArray = [];

  ngOnInit() {
    this.conditionalColorArray = this._formattingService.generateThreeWayGradient('#f8696b', '#ffeb84', '#63be7b', 10);
  }
}
