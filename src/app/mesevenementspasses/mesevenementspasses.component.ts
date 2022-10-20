import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-mesevenementspasses',
  templateUrl: './mesevenementspasses.component.html',
  styleUrls: ['./mesevenementspasses.component.css']
})
export class MesevenementspassesComponent implements OnInit {

  constructor(private AuthService : AuthService, private host : HostService, private http : HttpClient) { }

  ngOnInit(): void {
    this.recupEventOrganisateursPast();
  }
  
  eventsOrganisateursPast : any;

  recupEventOrganisateursPast() {
    this.http.get(this.host.myDevHost + 'eventorga/past/'+ this.AuthService.getUserSession().id).subscribe({
      next : (data) => { this.eventsOrganisateursPast = data },
      error : (err) => { console.log(err) }
    });
  }
}
