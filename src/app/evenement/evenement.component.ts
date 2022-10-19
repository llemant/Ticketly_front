import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { CreateeventService } from '../services/createevent.service';
import { BddService } from '../services/bdd.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  event: any;
  msg: any;

  msgAttributAbsent = "Un attribut est absent dans le formualire";


  constructor(private http: HttpClient, private route: Router, public authService: AuthService, public createeventService: CreateeventService,
    public bddService: BddService) { }

  ngOnInit(): void {
  }

  evenement(val: any){

    this.event = val;

    if (this.event.titre == "" || this.event.place == "" || this.event.date == "" || this.event.heure == "" 
    || this.event.genre == "" || this.event.prix == "" || this.event.photo == "" || this.event.lieu == ""  || this.event.organisateur == "") {
      this.authService.msgErr = this.msgAttributAbsent;
    } else {

      this.http.post('http://localhost:' + this.bddService.bddPort + '/event', val).subscribe({
        next: (data) => {
          this.createeventService.msgErr = "";
          this.createeventService.msgOK = "Création d'événement réussie";
          this.route.navigateByUrl('event');
        },
        error: (err) => { console.log(err) }
       })
    }
  } 
}
