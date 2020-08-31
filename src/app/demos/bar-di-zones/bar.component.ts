import { HttpClient } from '@angular/common/http';
import { BarUnidadeConfig } from './bar.config';
import { Component, OnInit, Inject } from '@angular/core';
import { BarServices, BibidasService, BarFactory } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styles: ['h2 { margin-top: 70px}'],
  providers: [
    // { provide: BarServices, useClass: BarServicesMock },
    { provide: BarServices, useFactory: BarFactory, deps: [HttpClient]},
    { provide: BibidasService, useExisting: BarServices}
  ]
})
export class BarComponent implements OnInit {

  barBebida1: string;
  barBebida2: string;
  configManual: BarUnidadeConfig

  constructor(private barServices: BarServices, 
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    private bebidaService: BibidasService
    ) { 

  }
  ngOnInit(): void { 
    this.barBebida1 = this.barServices.obterBebidas();
    this.configManual = this.ApiConfigManual
    this.barBebida2 = this.bebidaService.obterBebidas();
  }

}