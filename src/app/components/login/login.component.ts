import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router'; //biblioteca de rota dinamica
import { ListService } from 'src/app/services/Familia/list.service'; //IMPORTAÇÃO DO SERVICE PARA OBTER DADOS
import { Usuario } from 'src/app/interfaces/Usuario'; //IMPORTAÇÃO DA MODEL 
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showLogin = true;
  showLoginCad = false;

  emailCad: string = "";
  usuarioCad: string = "";
  senhaCad: string = "";

  usuarioLogin: string = "";
  senhaLogin: string = "";


  constructor(
    private route: ActivatedRoute,
    private listService: ListService,
    private router: Router
  )
  { 
    
  }

  ngOnInit(): void {
  }

  hideLogin(){
    this.showLogin = false;
    this.showLoginCad = true;
    this.usuarioLogin = "";
    this.senhaLogin = "";
  }

  hideCadastro(){
    this.showLogin = true;
    this.showLoginCad = false;
    this.emailCad = "";
    this.usuarioCad = "";
    this.senhaCad = "";
  }



  Logar(){
    //implementação

  }


  Cadastrar(){
    //implementação

  }
}
