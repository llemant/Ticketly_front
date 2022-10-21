import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-mestickets',
  templateUrl: './mestickets.component.html',
  styleUrls: ['./mestickets.component.css']
})
export class MesticketsComponent implements OnInit {

  constructor(private host : HostService, private AuthService : AuthService, private http : HttpClient) { }
eventsInscriptionFutur : any;
  ngOnInit(): void {
    this.recupEventInscriptionFutur();
  }
  recupEventInscriptionFutur() {
    this.http.get(this.host.myDevHost + 'inscriptions/futur/'+ this.AuthService.getUserSession().id).subscribe({
      next : (data) => { this.eventsInscriptionFutur = data },

    });
  }
}
