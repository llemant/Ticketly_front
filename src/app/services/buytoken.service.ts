import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyTokenService {
  msgErrCB10: any;
  msgOKCB10: any;
  msgErrPrepayee10: any;
  msgOKPrepayee10: any;
  msgErrCB100: any;
  msgOKCB100: any;
  msgErrPrepayee100: any;
  msgOKPrepayee100: any;
  msgErrCB200: any;
  msgOKCB200: any;
  msgErrPrepayee200: any;
  msgOKPrepayee200: any;
  msgErrCBCustom: any;
  msgOKCBCustom: any;
  msgErrPrepayeeCustom: any;
  msgOKPrepayeeCustom: any;
  constructor() { }
}
