import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-mesticketspasses',
  templateUrl: './mesticketspasses.component.html',
  styleUrls: ['./mesticketspasses.component.css']
})
export class MesticketspassesComponent implements OnInit {

  constructor(private host : HostService, private http : HttpClient, private AuthService : AuthService, private route : Router) { }
eventsInscriptionPast : any;
  ngOnInit(): void {
    if(!this.AuthService.isConnected()){
      this.route.navigateByUrl('login');
      this.AuthService.msgErr = "Veuillez vous connecter";
    } else {
    this.recupEventInscriptionPast();
    }
  }

  recupEventInscriptionPast() {
    this.http.get(this.host.myDevHost + 'inscriptions/past/'+ this.AuthService.getUserSession().id).subscribe({
      next : (data) => { 
        console.log(data);
        this.eventsInscriptionPast = data 
        console.log(this.eventsInscriptionPast)},
      error : (err) => { console.log(err) }
    });
  }

}
