import { Component, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { TwoWayBindingNovoComponent } from "./components/two-way-binding-novo/two-way-binding-novo.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";

const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list' , component: ListRenderComponent},
    {path: 'list/:id' , component: TwoWayBindingComponent},
    {path: 'novo' , component: TwoWayBindingNovoComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}