import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
// import { MenuComponent } from './navegacao/menu/menu.component';
// import { HomeComponent } from './navegacao/home/home.component';
// import { FooterComponent } from './navegacao/footer/footer.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { rootRouterConfig } from './app.routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutosService } from './produtos/produtos.service';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';
import { NavegacaoModule } from './navegacao/navegacao.module';


@NgModule({
  declarations: [
    AppComponent,
    // MenuComponent,
    // HomeComponent,
    // FooterComponent,
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
    [RouterModule.forRoot(rootRouterConfig, {useHash: true})],
  ],
  providers: [
    ProdutosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
