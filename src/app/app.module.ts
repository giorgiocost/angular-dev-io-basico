import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutosService } from './produtos/produtos.service';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AppRoutingModule } from './app.routes';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { BarComponent } from './demos/bar-di-zones/bar.component';
import { BarServices } from './demos/bar-di-zones/bar.service';
import { BarModule } from './demos/bar-di-zones/bar.module';
registerLocaleData(localePt);

export const BAR_PROVIDERS: Provider[] = [
  BarServices
];

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    SobreComponent,
    DataBindingComponent,
    CadastroComponent,
    BarComponent
  ],
  imports: [
    NavegacaoModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: '698dc19d489c4e4db73e28a713eab07b'
    })
  ],
  providers: [
    ProdutosService,
    // BAR_PROVIDERS,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
