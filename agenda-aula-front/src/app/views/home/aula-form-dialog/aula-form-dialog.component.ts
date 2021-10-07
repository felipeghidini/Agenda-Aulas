import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-aula-form-dialog',
  templateUrl: './aula-form-dialog.component.html',
  styleUrls: ['./aula-form-dialog.component.css']
})
export class AulaFormDialogComponent implements OnInit {
  public aulaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AulaFormDialogComponent>,
    private fb: FormBuilder
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

  cancel(): void {
    this.dialogRef.close();
  }

}
