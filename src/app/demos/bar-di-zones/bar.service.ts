import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export function BarFactory(http: HttpClient) {
  return new BarServices(http);
}

@Injectable()
export class BarServices {

  constructor(
    private http: HttpClient
  ) { }

  obterBebidas(): string {
    return 'Bebidasss';
  }

  obterPorcoes(): string {
    return 'Porções';
  }

  obterRefeicoes(): string {
    return 'Refeições';
  }
}

export class BarServicesMock {
  obterBebidas(): string {
    return 'Mock Bebidasss';
  }

  obterPorcoes(): string {
    return 'Mock Porções';
  }

  obterRefeicoes(): string {
    return 'Mock Refeições';
  }
}

export abstract class BibidasService {
  obterBebidas: () => string
}
