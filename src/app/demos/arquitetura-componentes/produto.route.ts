import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';

const produtoRouterConfig: Routes = [
    { path: '', component: ProdutoDashboardComponent }
];


@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [
        CommonModule,
        RouterModule 
    ]
})

export class ProdutoRoutingModule{}
