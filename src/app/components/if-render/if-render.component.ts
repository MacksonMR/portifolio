import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {

  canShow: boolean = true; //a mudança desse variavel exibi ou não a div desse componente (bolleana)
  name: string = 'Mackson' //a mudança dessa variavel exibi ou não o elemento (igualdade)

  constructor() { }

  ngOnInit(): void {
  }

}
