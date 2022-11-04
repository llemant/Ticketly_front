import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HostService } from 'src/app/services/host.service';

@Component({
  selector: 'app-mes-demande-amis',
  templateUrl: './mes-demande-amis.component.html',
  styleUrls: ['./mes-demande-amis.component.css']
})
export class MesDemandeAmisComponent implements OnInit {
  demandes: any;
  constructor(private http: HttpClient, private host: HostService, public authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    if (!this.authService.isConnected()) {
      this.route.navigateByUrl('login');
      this.authService.msgErr = "Veuillez vous connecter";
    } else {
      this.recupMesDemandesAmis();
    }
  }

  recupMesDemandesAmis() {
    this.http.get(this.host.myDevHost + 'amis/demande/' + this.authService.getUserSession().id).subscribe({
      next: (data) => { this.demandes = data; },
      error: (err) => { console.log(err); }
    });
  }

  returnImageMascOrFemi(u: any) {
    let f = "/assets/1.png";
    let m = "/assets/2.png";
    if (u.sexe == 'M') {
      return m;
    } else {
      return f;
    }
  }

  accepterDemande(val: any) {
    this.http.patch(this.host.myDevHost + 'amis/accepter/' + val.id, null).subscribe({
      next: (data) => { this.ngOnInit() },
      error: (err) => { console.log(err); }
    });
  }

  refuserDemande(val: any) {
    this.http.patch(this.host.myDevHost + 'amis/refuser/' + val.id, null).subscribe({
      next: (data) => { this.ngOnInit() },
      error: (err) => { console.log(err); }
    });
  }

}
