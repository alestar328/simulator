import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="netIncome !== undefined">
      <h2>Results</h2>
      <p>Monthly Net Income: {{ netIncome }} USD</p>
      <p>ROI (1st Year): {{ roiFirstYear }}%</p>
      <p>ROI (2nd Year): {{ roiSecondYear }}%</p>
      <p>ROI (3rd Year): {{ roiThirdYear }}%</p>
    </div>
  `,
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent {
  @Input() netIncome!: number;
  @Input() roiFirstYear!: number;
  @Input() roiSecondYear!: number;
  @Input() roiThirdYear!: number;
}
