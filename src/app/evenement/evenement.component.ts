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
  event: any;
  msg: any;
  events : any;
  msgAttributAbsent = "Un attribut est absent dans le formualire";


  constructor(private http: HttpClient, private route: Router, public authService: AuthService, public createeventService: CreateeventService, private host: HostService) { }

  ngOnInit(): void {
    this.recupEvent();
  }

  // evenement(val: any){

  //   this.event = val;

  //   if (this.event.titre == "" || this.event.place == "" || this.event.date == "" || this.event.heure == "" 
  //   || this.event.genre == "" || this.event.prix == "" || this.event.photo == "" || this.event.lieu == ""  || this.event.organisateur == "") {
  //     this.authService.msgErr = this.msgAttributAbsent;
  //   } else {

  //     this.http.post('http://localhost:' + this.bddService.bddPort + '/event', val).subscribe({
  //       next: (data) => {
  //         this.createeventService.msgErr = "";
  //         this.createeventService.msgOK = "Inscription réussie : veuillez vous connecter";
  //         this.route.navigateByUrl('event');
  //       },
  //       error: (err) => { console.log(err) }
  //      })
  //   }
  // } 

  recupEvent() {
    this.http.get(this.host.myDevHost + 'events').subscribe({
      next : (data) => { this.events = data },
      error : (err) => { console.log(err) }
    });
  }
}
