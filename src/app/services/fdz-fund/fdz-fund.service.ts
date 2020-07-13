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
      { name: 'Holiday' },
      { name: 'New Car' },
      { name: 'Christmas Presents' }
    ]);
  }

}
