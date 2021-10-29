import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Aula } from 'src/app/model/aula';
import { AulaService } from 'src/app/shared/service/aula.service';
import { UpdateAulaComponent } from '../update-aula/update-aula.component';

@Component({
  selector: 'app-aula-list',
  templateUrl: './aula-list.component.html',
  styleUrls: ['./aula-list.component.css']
})
export class AulaListComponent implements OnInit {

  aulas: Aula[];

  displayedColumns = ['sala','nome', 'aula', 'data', 'inicioAula', 'fimAula', 'acoes'];

  constructor(private aulaService: AulaService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.aulaService.readAula().subscribe(aulas => {
      this.aulas = aulas
      console.log(aulas);
    })
  }

  editarAula(): void {
    const dialogRef = this.dialog.open(UpdateAulaComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
