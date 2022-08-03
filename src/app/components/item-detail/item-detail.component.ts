import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal'; //interface Animal
import { ActivatedRoute } from '@angular/router'; //biblioteca de rota dinamica
import { ListService } from 'src/app/services/list.service'; //acesso ao service AnimalService

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  animal?: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute) { 
    this.getAnimal()
  }

  ngOnInit(): void {
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal))
  }

}
