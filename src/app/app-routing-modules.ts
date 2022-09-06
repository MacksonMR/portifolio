import { Component, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { TwoWayBindingNovoComponent } from "./components/two-way-binding-novo/two-way-binding-novo.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";
import { LoginComponent } from "./components/login/login.component";
import { BlocoNotasComponent } from "./components/bloco-notas/bloco-notas.component";
import { HomeComponent } from "./components/home/home.component";
import { IntroComponent } from "./components/intro/intro.component";
import { MenuComponent } from "./components/menu/menu.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'list' , component: ListRenderComponent},
    {path: 'list/:id' , component: TwoWayBindingComponent},
    {path: 'novo' , component: TwoWayBindingNovoComponent},
    {path: 'bloco' , component: BlocoNotasComponent},
    {path: 'home' , component: HomeComponent},
    {path: 'intro' , component: IntroComponent},
    {path: 'menu' , component: MenuComponent},
    {path: 'login' , component: LoginComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}