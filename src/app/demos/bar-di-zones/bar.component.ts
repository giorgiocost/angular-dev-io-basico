import { HttpClient } from '@angular/common/http';
import { BarUnidadeConfig } from './bar.config';
import { Component, OnInit, Inject, NgZone } from '@angular/core';
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
  progress = 0;
  label: string;

  constructor(private barServices: BarServices, 
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    private bebidaService: BibidasService,
    private ngZone: NgZone
    ) { 

  }
  ngOnInit(): void { 
    this.barBebida1 = this.barServices.obterBebidas();
    this.configManual = this.ApiConfigManual
    this.barBebida2 = this.bebidaService.obterBebidas();
  }

  processOutsideOfAngularZone() {
    this.label = 'fora';
    this.progress = 0;
    this.ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this.ngZone.run(() => console.log('finalizado por dentro do Angular'))
      });
    })
  }

  processWithinAngularZone() {
    this.label = 'dentro';
    this.progress = 0;
    this._increaseProgress(() => console.log('Finalizado por dentro do Angular!'));
  }

  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Progresso atual: ${this.progress}%`);

    if (this.progress < 100) {
      window.setTimeout(() => this._increaseProgress(doneCallback), 10);
    } else {
      doneCallback();
    }
  }

}