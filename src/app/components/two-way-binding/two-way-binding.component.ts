import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router'; //biblioteca de rota dinamica
import { ListService } from 'src/app/services/list.service'; //IMPORTAÇÃO DO SERVICE PARA OBTER DADOS
import { Familia } from 'src/app/interfaces/Familia'; //IMPORTAÇÃO DA MODEL 
import { Router } from '@angular/router';


@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  //VARIAVEIS USADAS NO COMPONTENTE
  name: string = "";
  ativo: boolean = true;
  familia?: Familia;
  family?: Familia;
  valid: boolean = false;

  //FOI CONSTRUIDO O "ROUTE" PARA OBTER O ID PASSADO NA URL
  //FOI CONSTRUIDO O "listService" PARA TER ACESSO AO SERVICE E PODER CONSULTAR DADOS
  constructor( 
              private route: ActivatedRoute,
              private listService: ListService,
              private router: Router
              ) 
  {

  }
  
  ngOnInit(): void {
    //AO INICIAR O COMPONENTE, É CHAMADO A FUNÇÃO PASSANDO O ID PASSADO NA URL, PARA OBTER A FAMILIA SELECIONADA
    this.GetFamilia(Number(this.route.snapshot.paramMap.get("id")))
  }

  GetFamilia(buscar:Number){
    //FORMA DE OBTER INFORMAÇÕES PELO LINK DE DIRECIONAMENTO
    const id = Number(this.route.snapshot.paramMap.get("id")); 

    //CHAMADA PARA O SERVICE(RETORNO DE DADOS)
    this.listService.getItem(id).subscribe((familia) => ( 

      //ATRIBUIÇÃO DO RETORNO PARA AS VARIAVEIS DO [(ngModel)] QUE SERÁ LIDO NO HTML DO COMPONENTE
      this.name = familia.nomeFamilia,
      this.ativo = familia.ativo
    ));
  }

  UpdateFamilia(){
    const id = Number(this.route.snapshot.paramMap.get("id")); 
    
    //VERIFICA SE O CAMPO ESTA PREENCHIDO
    if (this.name == ""){
      this.valid = true;
    }
    else{
    //CHAMA O METODO NO SERVICE PARA INICIAR O UPDATE PASSANDO OS PARAMETROS PELAS VARIAVEIS DO MODEL
    this.listService.update(id,this.name,this.ativo)

    //APOS O UPDATE, É REDIRECIONANDO PARA O COMPONENTE DE INDICE
    this.router.navigate(['/list'])
    }
  }

  Cancelar(){
    this.router.navigate(['/list'])
  }

}
