import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyTokenService {
  msgErrCB: any;
  msgOKCB: any;
  msgErrPrepayee: any;
  msgOKPrepayee: any;
  constructor() { }
}
