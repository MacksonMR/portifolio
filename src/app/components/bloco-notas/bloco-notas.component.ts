import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloco-notas',
  templateUrl: './bloco-notas.component.html',
  styleUrls: ['./bloco-notas.component.css']
})
export class BlocoNotasComponent implements OnInit {

  // condicionais para exibir popups do menu
  canShowArquivo:boolean = false;
  canShowEditar:boolean = false;
  canShowExibir:boolean = false;

  //condicionais para exibir popup salvar/erro
 mascaraPopup: any;
 salvarPopup: any;

 //condicionais elementos popup
 inputNomeNota:any;

  // array para guardar valores (nome da nota e a nota)
  lista: { nome: string; nota: string }[] = [];

  // detalhes da nota
  nomeNota: string = "*sem título";
  notaEscrita: string = "";

  constructor() { }

  ngOnInit(): void {
    // this.lista.push({ nome: '*sem título', nota: 'lembrete vazio' });
    // this.lista.push({ nome: '*sem título', nota: 'lembrete vazio' });
    // this.lista.push({ nome: '*sem título', nota: 'lembrete vazio' });
    // this.lista.push({ nome: '*sem título', nota: 'lembrete vazio' });
    // this.lista.push({ nome: '*sem título', nota: 'lembrete vazio' });
    // this.lista.push({ nome: '*sem título', nota: 'lembrete vazio' });
    // this.lista.push({ nome: '*sem título', nota: 'lembrete vazio' });
    // this.lista.push({ nome: '*sem título', nota: 'lembrete vazio' });

    this.mascaraPopup = document.getElementById("mascaraPop");
    this.salvarPopup = document.getElementById("popupSalvar");
    this.inputNomeNota = document.getElementById("inputNomeNota");
  }

  exibirPopArquivo(){
    this.canShowArquivo = true;
    this.canShowEditar = false;
    this.canShowExibir = false;
  }

  exibirPopEditar(){
    this.canShowEditar = true;
    this.canShowArquivo = false;
    this.canShowExibir = false;
  }

  exibirPopExibir(){
    this.canShowExibir = true;
    this.canShowArquivo = false;
    this.canShowEditar = false;
  }

  ocultarPopMenu(){
    this.canShowArquivo = false;
    this.canShowEditar = false;
    this.canShowExibir = false;
  }

  salvarNota(){
    this.mascaraPopup.style.display = 'flex';
    this.salvarPopup.style.display = 'flex';
  }

  SalvarNotaConfirmar(){
    
    if(this.Existente()){
      this.inputNomeNota.style.borderStyle = 'solid';
      this.inputNomeNota.style.borderColor = 'red';
    }
    else{
      this.inputNomeNota.style.border= 'none';
      this.lista.push({ nome: this.nomeNota, nota: this.notaEscrita });

      this.mascaraPopup.style.display = 'none';
      this.salvarPopup.style.display = 'none';
      this.nomeNota = this.nomeNota;
    }
  }

  CancelarNota(){
    this.mascaraPopup.style.display = 'none';
    this.salvarPopup.style.display = 'none';
    this.inputNomeNota.style.border= 'none';
  }

  Existente(){
    // procurar por item no array
    // o array "lista" não esta sendo passado como parametro porque já exitste no contexto atual
    let retorno;

    for(let item of this.lista){
      retorno = this.lista.find((obj) => {
        return obj.nome === item.nome;
      })
    }

    if(retorno?.nome === this.nomeNota){
      return true;
    }
    else{
      return false;
    }
  }

  


}
