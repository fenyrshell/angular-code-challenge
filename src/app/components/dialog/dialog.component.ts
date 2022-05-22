import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import moment = require('moment');
import { IdeaService } from '../../services/idea/idea.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private idea: IdeaService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) {
      id, name, username, rating, assignees, workflow
    }
  ) {
    this.dialogRef.afterClosed().subscribe(
      () => {
        this.dialogRef = null
      }
    )

    this.form = fb.group({
      id: [id],
      name: [name, Validators.required],
      username: [username, Validators.required],
      rating: [rating, Validators.required],
      assignees: [assignees, Validators.required],
      workflow: [workflow, Validators.required]
    });

  }

  ngOnInit() {

  }


  save() {
    this.dialogRef.close(this.form.value);


    if(this.form.value.id !== null) {
      this.idea.update(this.form.value.id, {
        name: this.form.value.name,
        username: this.form.value.username,
        rating: this.form.value.rating,
        assignees: this.form.value.assignees,
        workflow: this.form.value.workflow
      }).subscribe(
        (response:any) => {
          this.idea.index(1, 12, 1).subscribe(
            (response:any) => {
              this.idea.dataSource = response.data.records;
            },
            (err:any) => {

            });
        },
        (err:any) => {

        });
    }else {
      this.idea.store({
        name: this.form.value.name,
        username: this.form.value.username,
        rating: this.form.value.rating,
        assignees: this.form.value.assignees,
        workflow: this.form.value.workflow
      }).subscribe(
        (response:any) => {
          this.idea.index(1, 12, 1).subscribe(
            (response:any) => {
              this.idea.dataSource = response.data.records;
            },
            (err:any) => {

            });
        },
        (err:any) => {

        });
    }
  }

  close() {
    this.dialogRef.close();
  }

}
