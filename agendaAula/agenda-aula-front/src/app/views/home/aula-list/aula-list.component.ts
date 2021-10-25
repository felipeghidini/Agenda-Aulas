import { Component, OnInit } from '@angular/core';
import { Aula } from 'src/app/model/aula';
import { AulaService } from 'src/app/shared/service/aula.service';

@Component({
  selector: 'app-aula-list',
  templateUrl: './aula-list.component.html',
  styleUrls: ['./aula-list.component.css']
})
export class AulaListComponent implements OnInit {

  aulas: Aula[];

  displayedColumns = ['sala','nome', 'aula', 'data', 'inicioAula', 'fimAula', 'acoes'];

  constructor(private aulaService: AulaService) { }

  ngOnInit(): void {
    this.aulaService.readAula().subscribe(aulas => {
      this.aulas = aulas
      console.log(aulas);
    })
  }
}
