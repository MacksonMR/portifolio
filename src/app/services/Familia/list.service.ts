import { Injectable } from '@angular/core';
import { Familia } from '../../interfaces/Familia';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { HtmlParser } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  //INICIO DA URL PARA SER CONCATENADA NOS METODOS
  private apiUrl = "https://localhost:7077/familia"

  constructor(private http: HttpClient) {}

  //===============================CRUD====================

  //REMOVE A FAMILIA USANDO O ID
  remove(id:Number){ 
    console.log(`delete no service com o id: ${id}`)
    return this.http.get<Familia>(`${this.apiUrl}/delete/${id}`).subscribe()
  }

  //OBTER TODOS
  getAll(): Observable<Familia[]>{
    return this.http.get<Familia[]>(`${this.apiUrl}/getall`);
  }

  //METODO PARA OBTER "FAMILIA" PELO ID
  getItem(id: number): Observable<Familia>{

    //ENVIAR REQUISIÇÃO PARA A API PASSANDO O ID DA "FAMILIA" QUE SERÁ RETORNADA
    return this.http.get<Familia>(`${this.apiUrl}/getbyid/${id}`);
  }

  //ATUALIZA A FAMILIA
  update(id:number, descricao:string, situacao:boolean){
    return this.http.post(`${this.apiUrl}/update/?id=${id}&descricao=${descricao}&ativo=${situacao}`,"").subscribe()
  }

  //CRIA UMA NOVA FAMILIA
  create(descricao: string, situacao: boolean){
    return this.http.get(`${this.apiUrl}/create/?descricao=${descricao}&ativo=${situacao}`)
  }
}
