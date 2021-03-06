import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { BarUnidadeConfig } from './bar.config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      BarComponent
  ],
  exports: [
      BarComponent
  ]
})
export class BarModule { 
  static forRoot(config: BarUnidadeConfig): ModuleWithProviders {
    return {
      ngModule: BarModule,
      providers: [
        { provide: 'ConfigManualUnidade', useValue: config }
      ]
    }
  }
}