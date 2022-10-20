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
  }
  eventsOrgansiateurs : any;

  recupEventOrganisateurs() {
    this.http.get(this.host.myDevHost + 'eventorga/'+ this.AuthService.getUserSession().id).subscribe({
      /* next : (data) => { this.eventsOrgansiateurs = data }, */
      next : (data) => { this.eventsOrgansiateurs = data },
      error : (err) => { console.log(err) }
    });
  }

}
