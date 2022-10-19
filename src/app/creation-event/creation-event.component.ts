import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BddService } from '../services/bdd.service';
import { CreateeventService } from '../services/createevent.service';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-creation-event',
  templateUrl: './creation-event.component.html',
  styleUrls: ['./creation-event.component.css']
})
export class CreationEventComponent implements OnInit {

  constructor(public creationEvent : CreateeventService, public authService: AuthService, private http: HttpClient, private route: Router,
     private bddService: BddService, private host: HostService) { }

  ngOnInit(): void {}

  creerEvent(val: any){
    val.organisateur = this.authService.getUserSession();


   this.http.post(this.host.myDevHost + 'event', val).subscribe({
    next: (data) => {
      this.route.navigateByUrl('evenement');
      console.log('it worked, go check BDD');
    },
    error: (err) => { console.log(err) }
   })
  }
}
