import { Component, EventEmitter, inject, Inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.service';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = '';
  annualInvestment = '';
  expectedReturn = '';
  duration = '';

  @Output() calculateData = new EventEmitter();

  appService = inject(AppService);

  calculateInvestmentResults() {
    this.calculateData.emit({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration
    })
  }
}
