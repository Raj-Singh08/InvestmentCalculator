import { Inject, Injectable } from "@angular/core";
import { InvestmentDataType } from "./user-input/user-input.model";


@Injectable({providedIn: 'root'})
export class AppService {
     annualData: {
            year: number, interest: string,
            valueEndOfYear: string, annualInvestment: number,
            totalInterest: string, totalAmountInvested: string
        }[] = [];
    calculateInvestmentResults(data: InvestmentDataType) {
        

        let investmentValue = parseInt(data.initialInvestment);

        for (let i = 0; i < parseInt(data.duration); i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (parseInt(data.expectedReturn) / 100);
            investmentValue += interestEarnedInYear + parseInt(data.annualInvestment);
            const totalInterest =
                investmentValue - parseInt(data.annualInvestment) * year - parseInt(data.initialInvestment);
            this.annualData.push({
                year: year,
                interest: interestEarnedInYear.toFixed(2),
                valueEndOfYear: investmentValue.toFixed(2),
                annualInvestment: parseInt(parseInt(data.annualInvestment).toFixed(2)),
                totalInterest: totalInterest.toFixed(2),
                totalAmountInvested: parseInt(data.initialInvestment + parseInt(data.annualInvestment) * year).toFixed(2),
            });
        }

    }

    displayTable(){
        return this.annualData;
    }
}