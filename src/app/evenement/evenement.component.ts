import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { CreateeventService } from '../services/createevent.service';
import { HostService } from '../services/host.service';
import { FormControl } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  // event: any;
  msg: any;
  events: any;
  eventsAujd: any;
  eventsAvant: any;
  eventsApres: any;
  user: any;
  oldtoken: any;
  newtoken: any;
  total: any;
  tokenOrga: any;
  lInscription: any;


  quantity = new FormControl();

  msgSoldeInsuffisant = "Votre solde de token est insuffisant pour réaliser cet achat";
  msgEmptyQuantity = "Veuillez entrer un nombre de ticket à acheter";


  constructor(private http: HttpClient, private route: Router, public authService: AuthService, public createeventService: CreateeventService, private host: HostService) { }

  ngOnInit(): void {
    this.authService.msgOK = '';
    this.recupEventAujd();
    this.recupEventApres();
    this.recupEventAvant();
  }

  recupEvent() {
    this.http.get(this.host.myDevHost + 'events').subscribe({
      next: (data) => { this.events = data },
      error: (err) => { console.log(err) }
    });
  }

  recupEventAujd() {
    this.http.get(this.host.myDevHost + 'event/today').subscribe({
      next: (data) => { this.eventsAujd = data; console.log(this.eventsAujd) },
      error: (err) => { console.log(err) }
    });
  }

  recupEventAvant() {
    this.http.get(this.host.myDevHost + 'event/before').subscribe({
      next: (data) => { this.eventsAvant = data },
      error: (err) => { console.log(err) }
    });
  }

  recupEventApres() {
    this.http.get(this.host.myDevHost + 'event/after').subscribe({
      next: (data) => { this.eventsApres = data },
      error: (err) => { console.log(err) }
    });
  }

  inscription(val: any) {

    this.authService.msgOK = "";

    //recuperation de la session
    this.user = this.authService.getUserSession();
    // Récupération des tokens avant achat
    this.oldtoken = this.user.nbToken;
    // Calcul du cout total des places
    this.total = this.quantity.value * val.prix;

    if (this.quantity.value <= 0) {
      this.authService.msgErr = this.msgEmptyQuantity;
    } else {
      if (this.total > this.user.nbToken) {
        this.authService.msgErr = this.msgSoldeInsuffisant;
      } else {
        let ticket = { acheteur: this.user, event: val, ticketQuantity: this.quantity.value }

        this.http.post(this.host.myDevHost + 'inscription', ticket).subscribe({
          next: (data) => {
            this.lInscription = data;
            this.authService.msgErr = "";
            this.authService.msgOK = "Merci pour votre achat";
            this.authService.setUserInSession(this.lInscription.acheteur);
          },
          error: (err) => { console.log(err) }
        })
      }
    }





  }

}
// histoire de dire