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
  event: any;
  msg: any;
  
  msgAttributAbsent = "Un attribut est absent dans le formualire";
  //msgDateIncorrect = "Merci de saisir la date au format: JJ/MM/AAAA";
  //msgVilleIncorrect = "La ville que vous avez n'est pas correcte";




  //regexMail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
  //regexPw = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\.!@#$%^&*])(?=.{8,})");



  constructor(public creationEvent : CreateeventService, public authService: AuthService, private http: HttpClient, private route: Router,
     private bddService: BddService, private host: HostService) { }

  ngOnInit(): void {}

  creerEvent(val: any){
    val.organisateur = this.authService.getUserSession();


    if (this.event.titre == "" || this.event.nbPlace == "" || this.event.date == "" || this.event.heure == "" ||this.event.genre== "" || this.event.prix== "" || 
    this.event.photo== "" ||this.event.lieu== ""){
      this.creationEvent.msgErr = this.msgAttributAbsent;
    }else {



   this.http.post(this.host.myDevHost + 'event', val).subscribe({
    next: (data) => {
      this.route.navigateByUrl('evenement');
      console.log('Création de votre événement réussie !');
    },
    error: (err) => { console.log(err) }
   })
  }
  }
}
