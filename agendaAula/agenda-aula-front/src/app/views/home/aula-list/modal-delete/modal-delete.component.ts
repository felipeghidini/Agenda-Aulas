import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalDeleteComponent>
  ) { }

  ngOnInit(): void {
  }

  excluir() {
    this.dialogRef.close(true);
  }

  cancelar() {

  }

}
