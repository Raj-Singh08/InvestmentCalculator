import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { AppService } from './app.service';
import { InvestmentDataType } from './user-input/user-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent {
  

  constructor(private appService : AppService){}

  get AnnualData(){
    return this.appService.displayTable();
  }

  calculateInvestmentResults(data: InvestmentDataType) {
      this.appService.calculateInvestmentResults(data);
    
  }
}
