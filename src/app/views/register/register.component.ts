import { DialogComponent } from './../../components/dialog/dialog.component';
import { IdeaService } from './../../services/idea/idea.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  displayedColumns = ['position', 'name', 'username', 'workflow', 'actions' ];
  public dataSource = [];
  animal: string;
  name: string;

  constructor(public idea: IdeaService, private dialog: MatDialog) { }

  ngOnInit() {
    this.index();
  }

  openDialog({id, name, username, rating, assignees, workflow }): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id, name, username, rating, assignees, workflow
    };

    this.dialog.closeAll();
    this.dialog.open(DialogComponent, dialogConfig);
  }

  index(): void {
    this.idea.index(1, 12, 1).subscribe(
      (response:any) => {
        this.idea.dataSource = response.data.records;
      },
      (err:any) => {

      });
  }

  show(id): void {
    this.idea.show(id).subscribe(
      (response:any) => {

        this.openDialog({
          id: response.data.id,
          name: response.data.name,
          username: response.data.username,
          rating: `${response.data.rating}`,
          assignees: response.data.assignees,
          workflow: response.data.workflow
        });
      },
      (err:any) => {

      });
  }

  destroy(id): void {
    this.idea.destroy(id).subscribe(
      (response:any) => {
        window.alert(response.messageDetail);
        this.index();
      },
      (err:any) => {
        window.alert(err.error.messageDetail);
      });
  }

}
