import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AulaService } from 'src/app/shared/service/aula.service';

@Component({
  selector: 'app-aula-form-dialog',
  templateUrl: './aula-form-dialog.component.html',
  styleUrls: ['./aula-form-dialog.component.css']
})
export class AulaFormDialogComponent implements OnInit {
  public aulaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AulaFormDialogComponent>,
    private fb: FormBuilder,
    private aulaService: AulaService
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

  createAula() {
    //let newDate: moment.Moment = moment.utc(this.aulaForm.value.data).local();
    //this.aulaForm.value.data = newDate.format("YYYY-MM-DD");
    this.aulaService.showMessage('Jesus Cavaleiro do CÉU');
    this.dialogRef.close();
    this.aulaForm.reset();
  }

  cancel(): void {
    this.dialogRef.close();
    this.aulaForm.reset();
  }

}
