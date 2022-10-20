import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Component, Host, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
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
  quantity = new FormControl();

  constructor(private http: HttpClient, public authService: AuthService, public host: HostService) {
  }

  ngOnInit(): void {
    this.recupAvantages();
  }

  // Fonction déclenchée au clic
  achat(avt: any) {
    this.user = this.authService.getUserSession();
    this.total = this.quantity.value * avt.prix;
    this.http.patch(this.host.myDevHost + 'points/pay/' + this.total + '/' + this.authService.getUserSession().id, '').subscribe();
    console.log('ok paiement');
    let achat = {
      "user": this.authService.getUserSession(), 
      "avantage": avt,
      "quantite": this.quantity.value
    }
    console.log('achat : ' , achat);  
    console.log("total contient " + this.total);
    this.http.post(this.host.myDevHost + 'achat-bonus', achat).subscribe();
  }

  // Récupération de tous les avantages 
  recupAvantages() {
    this.http.get(this.host.myDevHost + 'avantages').subscribe({
      next: (data) => { this.avantages = data },
      error: (err) => { console.log(err) }
    });
  }
}
