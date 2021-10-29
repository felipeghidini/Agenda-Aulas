import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Aula } from 'src/app/model/aula';
import { AulaService } from 'src/app/shared/service/aula.service';

@Component({
  selector: 'app-update-aula',
  templateUrl: './update-aula.component.html',
  styleUrls: ['./update-aula.component.css']
})
export class UpdateAulaComponent implements OnInit {

  public aulaForm: FormGroup;

  aula: Aula = {
    id: '',
    sala: '',
    nome: '',
    aula: '',
    data: '',
    inicioAula: '',
    fimAula: ''
  }

  constructor(
    public dialogRef: MatDialogRef<UpdateAulaComponent>,
    private fb: FormBuilder,
    private aulaService: AulaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.aulaForm = this.fb.group({
      sala: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      aula: ['', [Validators.required]],
      data: ['', [Validators.required]],
      inicioAula: ['', [Validators.required]],
      fimAula: ['', [Validators.required]]
    });
  }

  updateAula(): any{
    //let newDate: moment.Moment = moment.utc(this.aulaForm.value.data).local();
    //this.aulaForm.value.data = newDate.format("YYYY-MM-DD");
    this.aulaService.updateAula(this.aula).subscribe(() => {
      this.aulaService.showMessage('Jesus Cavaleiro do CÉU');
      this.dialogRef.close();
      this.aulaForm.reset();
    })
  }

  cancel(): void {
    this.router.navigate([''])
    this.dialogRef.close();
    this.aulaForm.reset();
  }

}



