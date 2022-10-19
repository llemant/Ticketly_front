import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  myDevHost = 'http://localhost:8287/';

  constructor() { }
}
