import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoCardDetalheComponent } from './components/produto-card-detalhe/produto-card-detalhe.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProdutoRoutingModule } from './produto.route';
registerLocaleData(localePt);

@NgModule({
    declarations: [
        ProdutoDashboardComponent,
        ProdutoCardDetalheComponent
    ],
    imports: [ 
        CommonModule,
        ProdutoRoutingModule 
    ]
})

export class ProdutoModule{}