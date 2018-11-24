import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() isActive: boolean;
  @Input() likesCount: number;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isActive = ! this.isActive;
    this.likesCount += this.isActive ? 1 : -1;
  }
}
