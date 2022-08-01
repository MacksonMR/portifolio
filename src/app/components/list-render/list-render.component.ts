import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']

})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {name: 'Turca' , type: 'dog', age: 4},
    {name: 'ton' , type: 'cat' , age: 5},
    {name: 'frida', type: 'dog' , age: 10},
    {name: 'bob' ,type: 'horse' , age: 15},
  ];

  animalDetails = '';

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }

}
