import { Component, OnInit } from '@angular/core';
import { Familia } from 'src/app/interfaces/Familia'; //interface Animal
import { ActivatedRoute } from '@angular/router'; //biblioteca de rota dinamica
import { ListService } from 'src/app/services/list.service'; //acesso ao service AnimalService

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  familia?: Familia;


  FamiliaID?: number;
  FamiliaNome?: string;


  constructor(private listService: ListService, private route: ActivatedRoute) { 
    this.getFamilia()
  }

  ngOnInit(): void {
  }

  getFamilia(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((familia) => (this.familia = familia)) 
  }

  PostFamilia(){
    console.log(this.FamiliaNome)
  }

  Update(){
    console.log(`o familia nome esta como: ${this.FamiliaNome}`)
  }

}
