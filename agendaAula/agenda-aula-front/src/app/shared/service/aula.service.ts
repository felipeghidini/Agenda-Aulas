import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Aula } from 'src/app/model/aula';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  baseUrl = 'http://localhost:3001/aulas';

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "left",
      verticalPosition: "bottom"
    })
  }

  createAula(aula: Aula): Observable<Aula> {
    return this.http.post<Aula>(this.baseUrl, aula);
  }

  readAula(): Observable<Aula[]> {
    return this.http.get<Aula[]>(this.baseUrl);
  }

  readAulaById(id: string): Observable<Aula> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Aula>(url);
  }

  updateAula(aula: Aula): Observable<Aula> {
    const url = `${this.baseUrl}/${aula.id}`;
    return this.http.put<Aula>(url, aula)
  }

}
