import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()">
      <label for="price">Purchase Price</label>
      <input type="number" [(ngModel)]="purchasePrice" name="price" required />

      <label for="rent">Monthly Rent</label>
      <input type="number" [(ngModel)]="monthlyRent" name="rent" required />

      <button type="submit">Calculate</button>
    </form>
  `,
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  purchasePrice!: number;
  monthlyRent!: number;

  @Output() formSubmit = new EventEmitter<{ purchasePrice: number; monthlyRent: number }>();

  onSubmit() {
    this.formSubmit.emit({
      purchasePrice: this.purchasePrice,
      monthlyRent: this.monthlyRent
    });
  }
}
