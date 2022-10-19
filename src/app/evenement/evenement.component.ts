import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { CreateeventService } from '../services/createevent.service';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  // event: any;
  msg: any;
  events : any;
  eventsAujd : any;
  eventsAvant :any;
  eventsApres :any;


  msgAttributAbsent = "Un attribut est absent dans le formualire";


  constructor(private http: HttpClient, private route: Router, public authService: AuthService, public createeventService: CreateeventService, private host: HostService) { }

  ngOnInit(): void {
    this.recupEventAujd();
    this.recupEventApres();
    this.recupEventAvant();
  }

  recupEvent() {
    this.http.get(this.host.myDevHost + 'events').subscribe({
      next : (data) => { this.events = data },
      error : (err) => { console.log(err) }
    });
  }

  recupEventAujd() {
    this.http.get(this.host.myDevHost + 'event/today').subscribe({
      next : (data) => { this.eventsAujd = data; console.log(this.eventsAujd) },
      error : (err) => { console.log(err) }
    });
  }

  recupEventAvant() {
    this.http.get(this.host.myDevHost + 'event/before').subscribe({
      next : (data) => { this.eventsAvant = data },
      error : (err) => { console.log(err) }
    });
  }

  recupEventApres() {
    this.http.get(this.host.myDevHost + 'event/after').subscribe({
      next : (data) => { this.eventsApres = data },
      error : (err) => { console.log(err) }
    });
  }

}
