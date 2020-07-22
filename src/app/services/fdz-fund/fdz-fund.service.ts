import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { List } from 'immutable';
import { FdzFund, FdzFundContribution } from '@fdz/models';

enum LsKeys {
  Funds = 'fdz_funds'
}

@Injectable({
  providedIn: 'root'
})
export class FdzFundService {

  private funds: BehaviorSubject<List<FdzFund>> = new BehaviorSubject(List([]));

  constructor() {
    this.loadInitialData();
  }

  get funds$(): Observable<List<FdzFund>> {
    return this.funds.asObservable();
  }

  loadInitialData(): void {
    this.funds.next(List(
      this.getFundsDataFromLocalStorage()
    ));
  }

  addFund(newFund: FdzFund): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.saveFundsDataToLocalStorage(newFund);
        this.funds.next(this.funds.getValue().push(newFund));
        resolve();
      }, 500);
    });
  }

  getFund(id: string): Observable<FdzFund> {
    const funds = this.funds.getValue();
    const index = funds.findIndex((fund: FdzFund) => fund.id === id);
    return of(funds.get(index));
  }

  editFund(fund: FdzFund, name: string, target: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        fund.name = name;
        fund.target = target;
        this.funds.subscribe((funds) => {
          const allFunds = [];
          funds.map(f => allFunds.push(f));
          this.saveAllFundsDataToLocalStorage(allFunds);
          resolve();
        });
      }, 500);
    });
  }

  deleteFund(fund: FdzFund): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // First remove the fund from the behaviour subject list
        let funds = this.funds.getValue();
        let index = 0;
        funds.map((f, i) => { if (f === fund) { index = i; }});
        funds = funds.delete(index);

        // Next update the funds in local storage
        const allFunds = [];
        funds.map((f) => { allFunds.push(f); });
        this.saveAllFundsDataToLocalStorage(allFunds);

        this.funds.next(funds);
        resolve();
      }, 500);
    });
  }

  addContribution(fund: FdzFund, contribution: FdzFundContribution): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (!fund.contributions) {
          fund.contributions = [];
        }
        fund.contributions.push(contribution);
        fund.current = this.getContributionsTotalValue(fund);
        this.funds.subscribe((funds) => {
          const allFunds = [];
          funds.map(f => allFunds.push(f));
          this.saveAllFundsDataToLocalStorage(allFunds);
          resolve();
        });
      }, 500);
    });
  }

  getFundsDataFromLocalStorage(): Array<FdzFund> {
    const funds = [];
    if (localStorage.getItem(LsKeys.Funds) !== null) {
      JSON.parse(localStorage.getItem(LsKeys.Funds)).map((fund) => {
        funds.push(fund);
      });
    }
    return funds;
  }

  saveFundsDataToLocalStorage(newFund: FdzFund): void {
    const allFunds = this.getFundsDataFromLocalStorage();
    allFunds.push(newFund);
    localStorage.setItem(LsKeys.Funds, JSON.stringify(allFunds));
  }

  saveAllFundsDataToLocalStorage(funds: FdzFund[]): void {
    localStorage.setItem(LsKeys.Funds, JSON.stringify(funds));
  }

  getContributionsTotalValue(fund: FdzFund): number {
    let totalContributions = 0;
    if (typeof fund.contributions !== 'undefined') {
      fund.contributions.map((contribution) => {
        totalContributions += Number(contribution.amount);
      });
    }
    return totalContributions;
  }

}
