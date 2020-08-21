import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    SobreComponent,
    DataBindingComponent,
    CadastroComponent,
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
  ],
  providers: [
    ProdutosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
