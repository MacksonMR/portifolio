import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  size = 40; //atributos 
  font = 'Arial';
  color = 'red';

  classes = ["green-title,small-title"] //array/lista de classes
  underline = "underline-title" //classe separada

  constructor() { }

  ngOnInit(): void {
  }

}
