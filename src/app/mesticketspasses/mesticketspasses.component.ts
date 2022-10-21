import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-mesticketspasses',
  templateUrl: './mesticketspasses.component.html',
  styleUrls: ['./mesticketspasses.component.css']
})
export class MesticketspassesComponent implements OnInit {

  constructor(private host : HostService, private http : HttpClient, private AuthService : AuthService) { }
eventsInscriptionPast : any;
  ngOnInit(): void {
    this.recupEventInscriptionPast();
  }

  recupEventInscriptionPast() {
    this.http.get(this.host.myDevHost + 'inscriptions/past/'+ this.AuthService.getUserSession().id).subscribe({
      next : (data) => { 
        this.eventsInscriptionPast = data} 
    });
  }

}
