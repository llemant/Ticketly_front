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
  val: any;
  quantity = new FormControl();

  constructor(private http: HttpClient, public authService: AuthService, public host: HostService) {
  }

  ngOnInit(): void {
    this.recupAvantages();
  }

  paiement(prix: any) {
    this.http.patch(this.host.myDevHost + 'points/pay/' + prix + '/' + this.authService.getUserSession().id, '').subscribe();
    console.log(this.quantity.value);
    console.log('ok paiement');
  }

  obtenir(id: any, prix: any) {
    this.paiement(prix);
    this.achat(id);
  }

  achat(val: any) {
    val.user.id = this.authService.getUserSession().id;
    val.avantage.id = val;
    val.quantite = this.quantity.value;
    console.log(val);
    this.http.post(this.host.myDevHost + 'achat-bonus', val).subscribe();
  }

  recupAvantages() {
    this.http.get(this.host.myDevHost + 'avantages').subscribe({
      next : (data) => { this.avantages = data },
      error : (err) => { console.log(err) }
    });
  }
}
