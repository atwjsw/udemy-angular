import { Component, OnInit } from '@angular/core';
import { GithubFollowerService } from '../services/github-follower.service';

@Component({
  selector: 'github-follower',
  templateUrl: './github-follower.component.html',
  styleUrls: ['./github-follower.component.css']
})
export class GithubFollowerComponent implements OnInit {

  followers: any[];

  constructor(private service: GithubFollowerService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      res => this.followers = res
    );
  }
}
