import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorService } from './calculator.service';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { Roi } from './roi';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormularioComponent, ResultadosComponent,CommonModule],
  template: `
<div class="container">
  <app-formulario (formSubmit)="onFormSubmit($event)"></app-formulario>

  <div class="resultados" *ngIf="roiFirstYear">
    <h2>Results</h2>
    <p><strong>Monthly Net Income:</strong> {{ netIncome }} USD</p>

    <p><strong>ROI (1st Year):</strong> {{ roiFirstYear.percentage | number:'1.0-2' }}% 
      ({{ roiFirstYear.amount | currency:'USD':'symbol':'1.0-0' }} USD)</p>

    <p><strong>ROI (2nd Year):</strong> {{ roiSecondYear.percentage | number:'1.0-2' }}% 
      ({{ roiSecondYear.amount | currency:'USD':'symbol':'1.0-0' }} USD)</p>

    <p><strong>ROI (3rd Year):</strong> {{ roiThirdYear.percentage | number:'1.0-2' }}% 
      ({{ roiThirdYear.amount | currency:'USD':'symbol':'1.0-0' }} USD)</p>
  </div>
</div>

  `,
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  netIncome!: number;
  roiFirstYear!: Roi;  // Cambia el tipo a ROI
  roiSecondYear!: Roi; // Cambia el tipo a ROI
  roiThirdYear!: Roi; 

  constructor(private calculatorService: CalculatorService) {}

  onFormSubmit(data: { purchasePrice: number; monthlyRent: number }) {
    const agencyFees = [0.30, 0.25, 0.20]; // First 3 years
    const annualIncomes = agencyFees.map(fee =>
      12 * this.calculatorService.calculateNetIncome(data.monthlyRent, fee)
    );
  
    this.netIncome = this.calculatorService.calculateNetIncome(data.monthlyRent, agencyFees[0]);
  
    // Cálculo de ROI y cantidad de dinero generada por año
    this.roiFirstYear = {
      percentage: (annualIncomes[0] / data.purchasePrice) * 100,
      amount: annualIncomes[0]
    };
    this.roiSecondYear = {
      percentage: (annualIncomes[1] / data.purchasePrice) * 100,
      amount: annualIncomes[1]
    };
    this.roiThirdYear = {
      percentage: (annualIncomes[2] / data.purchasePrice) * 100,
      amount: annualIncomes[2]
    };
  }
}