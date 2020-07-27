import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
    declarations: [
        ProdutoDashboardComponent
    ],
    imports: [ 
        CommonModule 
    ]
})

export class ProdutoModule{}