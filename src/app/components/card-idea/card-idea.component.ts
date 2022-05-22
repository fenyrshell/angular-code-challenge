import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-idea',
  templateUrl: './card-idea.component.html',
  styleUrls: ['./card-idea.component.css']
})
export class CardIdeaComponent implements OnInit {
  @Input('name') name;
  @Input('rating') rating;
  @Input('username') username;
  @Input('workflow') workflow;
  @Input('assignees') assignees;
  @Input('posted-at') postedAt;

  constructor() { }

  ngOnInit() {
  }

}
