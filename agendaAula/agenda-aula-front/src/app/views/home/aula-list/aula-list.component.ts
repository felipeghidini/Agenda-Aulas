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

  // aulas: Aula[] = [
  //   {
  //     sala: '10',
  //     nome: 'Felipe Ghidini',
  //     aula: 'Desenvolvimento Web',
  //     data: '10/10/2021',
  //     inicioAula: '10:30',
  //     fimAula: '12:00'
  //   },
  //   {
  //     sala: '18',
  //     nome: 'Felipe Ghidini',
  //     aula: 'Desenvolvimento Web',
  //     data: '10/10/2021',
  //     inicioAula: '10:30',
  //     fimAula: '12:00'
  //   },
  //   {
  //     sala: '11',
  //     nome: 'Felipe Ghidini',
  //     aula: 'Desenvolvimento Web',
  //     data: '10/10/2021',
  //     inicioAula: '10:30',
  //     fimAula: '12:00'
  //   },
  //   {
  //     sala: '1',
  //     nome: 'Felipe Ghidini',
  //     aula: 'Desenvolvimento Web',
  //     data: '10/10/2021',
  //     inicioAula: '10:30',
  //     fimAula: '12:00'
  //   },
  //   {
  //     sala: '12',
  //     nome: 'Felipe Ghidini',
  //     aula: 'Desenvolvimento Web',
  //     data: '10/10/2021',
  //     inicioAula: '10:30',
  //     fimAula: '12:00'
  //   }
  // ];

  displayedColumns = ['sala','nome', 'aula', 'data', 'inicioAula', 'fimAula'];

  constructor(private aulaService: AulaService) { }

  ngOnInit(): void {
    this.aulaService.readAula().subscribe(aulas => {
      this.aulas = aulas
      console.log(aulas);

    })
  }


}
