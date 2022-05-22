
import { Component, OnInit } from '@angular/core';
import moment = require('moment');
import { IdeaService } from '../../services/idea/idea.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results:any = [];
  page = 1;

  constructor(private idea: IdeaService) {}

  ngOnInit(): void {
    this.index();
  }

  index(): void {
    this.idea.index(this.page).subscribe(
      (response:any) => {
        response.data.records.forEach(result => {
          result.createdAt = moment(result.createdAt).format('LLL');
          this.results.push(result);
        });

        if(response.data.records.length > 0) this.page ++;
      },
      (errror:any) => {

      });
  }

  onScroll(): void {
    this.index();
  }

}
