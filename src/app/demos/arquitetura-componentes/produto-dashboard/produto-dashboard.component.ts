import { ProdutoCountComponent } from './../components/produto-count/produto-count.component';
import { Observable, fromEvent } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Produto } from 'src/app/produtos/produto';
import { ProdutosService } from 'src/app/produtos/produtos.service';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styleUrls: ['./produto-dashboard.component.css']
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[];

  @ViewChild(ProdutoCountComponent, { static: false}) contador: ProdutoCountComponent;
  @ViewChild('teste', {static: false}) mensagemTela: ElementRef;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.obterProdutos()
    .subscribe(prod => {
      this.produtos = prod;
      console.log(this.produtos)
    })
  }

  mudarStatus(event: Produto) {
    console.log(event.ativo);
    event.ativo = !event.ativo;
  }

  ngAfterViewInit() {
    let clickTexto: Observable< any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() => {
      alert('clicou no texto !');
    });

    console.log('Obj do contador', this.contador.produtos);
  }

}
