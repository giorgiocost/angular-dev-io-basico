import { BarUnidadeConfig } from './bar.config';
import { Component, OnInit, Inject } from '@angular/core';
import { BarServices, BarServicesMock } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styles: ['h2 { margin-top: 70px}'],
  providers: [
    { provide: BarServices, useClass: BarServicesMock }
  ]
})
export class BarComponent implements OnInit {

  barBebida1: string;
  configManual: BarUnidadeConfig

  constructor(private barServices: BarServices, 
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig
    ) { 

  }
  ngOnInit(): void { 
    this.barBebida1 = this.barServices.obterBebidas();
    this.configManual = this.ApiConfigManual
  }

}