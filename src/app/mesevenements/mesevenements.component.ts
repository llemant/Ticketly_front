import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-mesevenements',
  templateUrl: './mesevenements.component.html',
  styleUrls: ['./mesevenements.component.css']
})
export class MesevenementsComponent implements OnInit {

  constructor(private AuthService : AuthService, private host : HostService, private http : HttpClient) { }

  ngOnInit(): void {
    this.recupEventOrganisateurs();
    this.recupEventOrganisateursPast();
  }
  eventsOrganisateurs : any;
  eventsOrganisateursPast : any;

  recupEventOrganisateurs() {
    this.http.get(this.host.myDevHost + 'eventorga/'+ this.AuthService.getUserSession().id).subscribe({
      next : (data) => { this.eventsOrganisateurs = data },
      error : (err) => { console.log(err) }
    });
  }

  recupEventOrganisateursPast() {
    this.http.get(this.host.myDevHost + 'eventorga/past/'+ this.AuthService.getUserSession().id).subscribe({
      next : (data) => { this.eventsOrganisateursPast = data },
      error : (err) => { console.log(err) }
    });
  }

}
