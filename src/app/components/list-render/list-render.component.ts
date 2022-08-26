import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Familia } from 'src/app/interfaces/Familia';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']

})
export class ListRenderComponent implements OnInit {

  familias: Familia[] = [];

  familiaDetails = '';
  _situacao?: boolean;

  constructor(private listService : ListService) {
    this.getFamilias()
  }

  ngOnInit(): void {
  }

  showAge(familia: Familia): void{
    this.familiaDetails = `O nome da familia é: ${familia.nomeFamilia} com o ID: ${familia.idFamilia}`;
    console.log("botao detalhes")
  }

  removeFamilia(familia: Familia){
    this.familias = this.familias.filter((a) => familia.nomeFamilia !== a.nomeFamilia); //remove apenas no front
    this.listService.remove(familia.idFamilia)//responsavel por remover no banco de dados
  }

  getFamilias(): void{
    this.listService.getAll().subscribe((familias) => (this.familias = familias));
  }

  getFamiliaId(familia: Familia): void{
    this.listService.getItem(familia.idFamilia).subscribe();
  }
}
