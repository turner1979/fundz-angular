import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { List } from 'immutable';
import { FdzFund } from '@fdz/models';

enum LsKeys {
  Funds = 'fdz_funds'
}

@Injectable({
  providedIn: 'root'
})
export class FdzFundService {

  private _funds: BehaviorSubject<List<FdzFund>> = new BehaviorSubject(List([]));
  
  constructor() {
    this.loadInitialData();
  }

  get funds() {
    return this._funds.asObservable();
  }

  loadInitialData() {
    this._funds.next(List(
      this.getFundsDataFromLocalStorage()
    ));
  }

  addFund(newFund: FdzFund): void {
    this.saveFundsDataToLocalStorage(newFund);
    this._funds.next(this._funds.getValue().push(newFund));
  }

  getFund(id: string): Observable<FdzFund> {
    const funds = this._funds.getValue();
    let index = funds.findIndex((fund: FdzFund) => fund.id === id);
    return of(funds.get(index));
  }

  editFund(updatedFund: FdzFund) {
    console.log(updatedFund);
    // TODO: edit fund
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

  saveFundsDataToLocalStorage(newFund: FdzFund) {
    const allFunds = this.getFundsDataFromLocalStorage();
    allFunds.push(newFund);
    localStorage.setItem(LsKeys.Funds,JSON.stringify(allFunds));
  }

}
