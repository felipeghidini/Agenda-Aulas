import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AulaFormDialogComponent } from './aula-form-dialog/aula-form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  addAula(): void {
    const dialogRef = this.dialog.open(AulaFormDialogComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
