import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { HtmlParser } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = "http://localhost:3000/animals"

  constructor(private http: HttpClient) { }

  remove(id:Number){
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`)
  }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }

}
