import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BddService {

  bddPort = '8287';

  constructor() { }
}
