import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FdzFund } from '@fdz/models';

@Injectable({
  providedIn: 'root'
})
export class FdzFundService {

  constructor() { }

  getFunds(): Observable<FdzFund[]> {
    // TODO: data should be retrieved from localstorage not hardcoded
    return of([
      { colour: '#00aa00', current: 0, name: 'Ferrari', target: 90000 },
      { colour: '#00aa00', current: 1200, name: 'Holiday', target: 2000 },
      { colour: '#00aaa0', current: 500, name: 'New Car', target: 10000 },
      { colour: '#00aa00', current: 500, name: 'Wedding', target: 5000 }
    ]);
  }

}
