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

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name);
  }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl);
  }

}
