import { NgModule } from '@angular/core';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { HomeComponent } from './navegacao/home/home.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'sobre', component: SobreComponent},
    { path: 'feature-data-binding', component: DataBindingComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'filmes', component: FilmesComponent },
    { path: 'produtos', 
    loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
        .then(m => m.ProdutoModule)
    },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig, { useHash: true, enableTracing: false }),
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}