import { HttpClient } from '@angular/common/http';
import { Component, Host, OnInit } from '@angular/core';
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

  constructor(private http: HttpClient, public authService: AuthService, public host: HostService) {
  }

  ngOnInit(): void {
    this.recupAvantages();
  }

  paiement(prix: any) {
    this.http.patch(this.host.myDevHost + 'points/pay/' + prix + '/' + this.authService.getUserSession().id, '').subscribe();
    console.log('ok paiement');
  }

  recupAvantages() {
    this.http.get(this.host.myDevHost + 'avantages').subscribe({
      next : (data) => { this.avantages = data },
      error : (err) => { console.log(err) }
    });
  }
}
