import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BlocoNotasComponent } from '../bloco-notas/bloco-notas.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['/menu']);  
  }

  redirect(url: string){
    this.router.navigate([url])
  }

}
