import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FdzFund } from '@fdz/models';

// TODO: data should be retrieved from localstorage not hardcoded
const FUNDS: FdzFund[] = [
  { id: '1', current: 0, name: 'Ferrari', target: 90000 },
  { id: '2', current: 1200, name: 'Holiday', target: 2000 },
  { id: '3', current: 500, name: 'New Car', target: 10000 },
  { id: '4', current: 500, name: 'Wedding', target: 5000 }
];

@Injectable({
  providedIn: 'root'
})
export class FdzFundService {

  constructor() { }

  getFunds(): Observable<FdzFund[]> {
    return of(FUNDS);
  }

  getFund(id: string): Observable<FdzFund> {
    return of(FUNDS.filter((fund) => fund.id === id )[0]);
  }

}
