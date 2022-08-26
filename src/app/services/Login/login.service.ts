import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../Usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }






  Logar(usuario: any){
    //implementação
    return new Promise((resolve) => {
      window.localStorage.getItem('token');
      resolve(true);
    })
  
    //service de login
  
    
  }
  
  
  Cadastrar(){
    //implementação
    return new Promise((resolve) => {
      resolve(true);
    });
  }



}


