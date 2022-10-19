import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { CreateeventService } from '../services/createevent.service';
import { BddService } from '../services/bdd.service';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  event: any;
  msg: any;
  events : any;
  msgAttributAbsent = "Un attribut est absent dans le formualire";


  constructor(private http: HttpClient, private route: Router, public authService: AuthService, public createeventService: CreateeventService,
    public bddService: BddService, private host: HostService) { }

  ngOnInit(): void {
    this.recupEvent();
  }

  recupEvent() {
    this.http.get(this.host.myDevHost + 'events').subscribe({
      next : (data) => { this.events = data },
      error : (err) => { console.log(err) }
    });
  }
}
