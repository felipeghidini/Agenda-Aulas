import { Component, OnInit } from '@angular/core';
import { Aula } from 'src/app/model/aula';

@Component({
  selector: 'app-aula-list',
  templateUrl: './aula-list.component.html',
  styleUrls: ['./aula-list.component.css']
})
export class AulaListComponent implements OnInit {

  aulas: Aula[] = [
    {
      Nº: 1,
      nome: 'Felipe Ghidini',
      aula: 'Desenvolvimento Web',
      inicioAula: '10:30',
      fimAula: '12:00'
    }
  ];

  displayedColumns = ['nome', 'aula', 'inicioAula', 'fimAula'];

  constructor() { }

  ngOnInit(): void {
  }


}
