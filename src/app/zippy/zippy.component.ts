import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input() title: string;
  isDetailsShown = false;
  detailsContent: string;

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.isDetailsShown = !this.isDetailsShown;
  }

}
