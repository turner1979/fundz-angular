import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { List } from 'immutable';
import { FdzFund } from '@fdz/models';

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
    // TODO: data should be retrieved from localstorage not hardcoded here
    this._funds.next(List([
      { id: '1', current: 0, name: 'Ferrari', target: 90000 },
      { id: '2', current: 1200, name: 'Holiday', target: 2000 },
      { id: '3', current: 500, name: 'New Car', target: 10000 },
      { id: '4', current: 5000, name: 'Wedding', target: 5000 },
      { id: '5', current: 100, name: 'Computer', target: 3000 }
    ]));
  }

  addFund(newFund: FdzFund): void {
    this._funds.next(this._funds.getValue().push(newFund));
  }

  getFund(id: string): Observable<FdzFund> {
    const funds = this._funds.getValue();
    let index = funds.findIndex((fund: FdzFund) => fund.id === id);
    return of(funds.get(index));
  }

}
