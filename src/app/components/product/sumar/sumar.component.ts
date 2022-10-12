import { Numeros } from '../calculadora.model';
import { CalculadoraService } from '../calculadora.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  numeros: Numeros = {
    primer_numero: 0,
    segundo_numero: 0,
    resultado: 0
  }

  resultado: number = 0

  constructor(private calculadoraService: CalculadoraService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  sumar(): void {
    this.calculadoraService.sumar(this.numeros).subscribe(resultado => {
      this.resultado = resultado
      this.calculadoraService.showMessage('Numero sumado!')
    })

  }
}
