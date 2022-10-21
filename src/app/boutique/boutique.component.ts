import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Host, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { BoutiqueService } from '../services/boutique.service';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
  avantage: any;
  avantages: any;
  user: any;
  val: any;
  total: any;
  oldpoints: any;
  quantity = new FormControl();
  regexQuantity = new RegExp('[0-9]+');

  constructor(private http: HttpClient, public authService: AuthService, public host: HostService, public boutiqueService: BoutiqueService) {
  }

  ngOnInit(): void {
    this.recupAvantages();
  }

  // Fonction déclenchée au clic
  achat(avt: any) {
    this.user = this.authService.getUserSession(); // Recuperation user

    // Recuperation total a payer
    this.total = this.quantity.value * avt.prix;


    // Récupération points avant achat
    this.oldpoints = this.user.nbPoint;


    // Paiement 
    if (this.oldpoints < this.total) {
      this.boutiqueService.MsgBoutiqueErr = 'Vous n\'avez pas assez de points de fidélité pour acheter cela !'
      this.boutiqueService.MsgBoutiqueOK = ''
    } else {
      if (!this.regexQuantity.test(this.quantity.value) || this.quantity.value < 0) {
        this.boutiqueService.MsgBoutiqueErr = 'Veuillez entrer une quantité valide.'
        this.boutiqueService.MsgBoutiqueOK = ''
      } else {
        this.http.patch(this.host.myDevHost + 'points/pay/' + this.total + '/' + this.authService.getUserSession().id, '').subscribe({
          next: (data) => { this.authService.setUserInSession(data)}
        })
        // Recuperation du body pour l'API achat-bonus
        let achat = {
          "user": this.authService.getUserSession(),
          "avantage": avt,
          "quantite": this.quantity.value
        }
        this.http.post(this.host.myDevHost + 'achat-bonus', achat).subscribe({

        });
        this.boutiqueService.MsgBoutiqueErr = ''
        this.boutiqueService.MsgBoutiqueOK = 'Votre avantage a été pris en compte ! Vous avez maintenant ' + this.authService.getUserSession().nbPoint + ' points de fidélité.';
      };
    }
  }

  // Récupération de tous les avantages 
  recupAvantages() {
    this.http.get(this.host.myDevHost + 'avantages').subscribe({
      next: (data) => { this.avantages = data },

    });
  }

}
