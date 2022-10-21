import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-mestickets',
  templateUrl: './mestickets.component.html',
  styleUrls: ['./mestickets.component.css']
})
export class MesticketsComponent implements OnInit {

  constructor(private host : HostService, private AuthService : AuthService, private http : HttpClient, private route : Router) { }
eventsInscriptionFutur : any;
  ngOnInit(): void {
    if(!this.AuthService.isConnected()){
      this.route.navigateByUrl('login');
      this.AuthService.msgErr = "Veuillez vous connecter";
    }
    this.recupEventInscriptionFutur();
  }
  recupEventInscriptionFutur() {
    this.http.get(this.host.myDevHost + 'inscriptions/futur/'+ this.AuthService.getUserSession().id).subscribe({
      next : (data) => { this.eventsInscriptionFutur = data },
      error : (err) => { console.log(err) }
    });
  }
}
