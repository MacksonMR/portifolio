import { Component, OnInit } from '@angular/core';

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


  constructor() { }

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

  Cadastrar(){
    //implementação
    console.log(this.emailCad);
    console.log(this.senhaCad);
    console.log(this.usuarioCad);
  }

  Logar(){
    //implementação
    console.log(this.usuarioLogin);
    console.log(this.senhaLogin);

    if(this.usuarioLogin == "mackson" && this.senhaLogin == "123"){
      console.log("login realizado")
    }
    else{
      console.log("login recusado")
    }
  }
}


