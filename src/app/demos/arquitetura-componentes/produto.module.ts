import { ProdutoAppComponent } from './produto.app.componet';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoCardDetalheComponent } from './components/produto-card-detalhe/produto-card-detalhe.component';
import { ProdutoCountComponent } from './components/produto-count/produto-count.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProdutoRoutingModule } from './produto.route';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoResolve } from './service/produto.resolve';
import { FilmesComponent } from './pipes/filmes/filmes.component';
registerLocaleData(localePt);

@NgModule({
    declarations: [
        ProdutoAppComponent,
        ProdutoDashboardComponent,
        ProdutoCardDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent,
        FilmesComponent,
    ],
    providers: [
        ProdutoResolve,
    ],
    imports: [ 
        CommonModule,
        ProdutoRoutingModule 
    ]
})

export class ProdutoModule{}