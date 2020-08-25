import { ProdutoAppComponent } from './produto.app.componet';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoCardDetalheComponent } from './components/produto-card-detalhe/produto-card-detalhe.component';
import { ProdutoCountComponent } from './components/produto-count/produto-count.component';
import { ProdutoRoutingModule } from './produto.route';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoResolve } from './service/produto.resolve';
import { FilmesComponent } from '../pipes/filmes/filmes.component';
import { FileSizePipe } from '../pipes/filmes/file-size.pipe';
import { ImageFormatPipe } from '../pipes/image-format.pipe';


@NgModule({
    declarations: [
        ProdutoAppComponent,
        ProdutoDashboardComponent,
        ProdutoCardDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent,
        FilmesComponent,
        FileSizePipe,
        ImageFormatPipe,  
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