import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private http = inject(HttpClient);
  private url: string;
  constructor() {
    this.url = 'http://localhost:8080/usuario';
  }


  findAll():Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  findById(id:number):Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  save(usuario: Usuario):Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario);
  }

}
