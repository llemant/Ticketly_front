import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CreateeventService } from '../services/createevent.service';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-creation-event',
  templateUrl: './creation-event.component.html',
  styleUrls: ['./creation-event.component.css']
})
export class CreationEventComponent implements OnInit {

  constructor(public creationEvent : CreateeventService, public authService: AuthService, private http: HttpClient, private route: Router, private host: HostService) { }

  ngOnInit(): void {}

  creerEvent(val: any){
    val.organisateur = this.authService.getUserSession();


    if (this.event.titre == "" || this.event.nbPlace == "" || this.event.date == "" || this.event.heure == "" ||this.event.genre== "" || this.event.prix== "" || 
    this.event.photo== "" ||this.event.lieu== ""){
      this.creationEvent.msgErr = this.msgAttributAbsent;
    }else {



   this.http.post(this.host.myDevHost + 'event', val).subscribe({
    next: (data) => {
<<<<<<< HEAD
      this.route.navigateByUrl('evenement');
      console.log('Création de votre événement réussie !');
=======
      this.route.navigateByUrl('profile');
>>>>>>> a2eaf44590c0b6a7c2a912e0b197f2bada1de578
    },
    error: (err) => { console.log(err) }
   })
  }
  }
}
