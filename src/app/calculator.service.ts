import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  calculateNetIncome(monthlyRent: number, agencyFee: number): number {
    return monthlyRent - (monthlyRent * agencyFee);
  }

  calculateROI(purchasePrice: number, annualNetIncome: number): number {
    return (annualNetIncome / purchasePrice) * 100;
  }
}
