import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoCardDetalheComponent } from './components/produto-card-detalhe/produto-card-detalhe.component';
import { ProdutoCountComponent } from './components/produto-count/produto-count.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProdutoRoutingModule } from './produto.route';
registerLocaleData(localePt);

@NgModule({
    declarations: [
        ProdutoDashboardComponent,
        ProdutoCardDetalheComponent,
        ProdutoCountComponent,
    ],
    imports: [ 
        CommonModule,
        ProdutoRoutingModule 
    ]
})

export class ProdutoModule{}