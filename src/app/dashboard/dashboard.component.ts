import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router, private AuthService : AuthService, private host: HostService) { }

eventsInscriptionAujd : any;

  ngOnInit(): void {
    this.recupEventInscriptionAujd();
  }

  recupEventInscriptionAujd() {
    this.http.get(this.host.myDevHost + 'inscriptions/today/'+ this.AuthService.getUserSession().id).subscribe({
      next : (data) => { this.eventsInscriptionAujd = data },
      error : (err) => { console.log(err) }
    });
  }
}
