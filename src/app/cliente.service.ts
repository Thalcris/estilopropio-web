import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = 'http://localhost:8080/estilopropio/v1/cliente';

  constructor(private http: HttpClient) { }

  getCliente(correo: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${correo}`);
  }

  createCliente(cliente: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, cliente);
  }

  updateCliente(cliente: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}`, cliente);
  }

  deleteCliente(correo: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${correo}`, { responseType: 'text' });
  }

  getClientList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
