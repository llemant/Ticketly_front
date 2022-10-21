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
  msg: any;



  regexGenre = new RegExp("^[a-zA-Z]");
  regexPrix = new RegExp("^[0-9]*[1-9][0-9]*$");
  regexPhoto = new RegExp("^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$");

  msgAttributManquant = "Un attribut est manquant";
  msgGenreIncorrect = "Le format du genre est incorrect";
  msgPrixIncorrect = "Le format du prix est incorrect : c'est un entier";
  msgPhotoIncorrect = "Le format de l'image est incorrect : c'est un lien";



  constructor(public creationEvent: CreateeventService, public authService: AuthService, private http: HttpClient, private route: Router, private host: HostService) { }

  ngOnInit(): void { }



  creerEvent(event: any) {
    event.organisateur = this.authService.getUserSession();

    if (!this.regexGenre.test(event.genre)) {
      this.creationEvent.msgErr = this.msgGenreIncorrect;
    }
    if (!this.regexPrix.test(event.prix)) {
      this.creationEvent.msgErr = this.msgPrixIncorrect;
    }
    if (!this.regexPhoto.test(event.photo)) {
      this.creationEvent.msgErr = this.msgPhotoIncorrect;
    }



    if (this.regexGenre.test(event.genre) &&
      this.regexPrix.test(event.prix) &&
      this.regexPhoto.test(event.photo)
    ) {
      if(this.authService.getUserSession().nbToken < 200) {
        this.creationEvent.msgErr = "Merci d'acheter des tokens pour créer votre événement, la création d'un événement vous coutera 200 tokens" 
      } else {

      

      this.http.post(this.host.myDevHost + 'event', event).subscribe({
        next: (data) => {
          event = data;
          this.authService.setUserInSession(event.organisateur)

          this.creationEvent.msgErr = "";
          this.creationEvent.msgOK = "";
          this.route.navigateByUrl('profile');
        },

      })
    }

  }
}
}
