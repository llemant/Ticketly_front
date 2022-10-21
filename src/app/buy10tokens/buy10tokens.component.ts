import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BuyTokenService } from '../services/buytoken.service';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-buy10tokens',
  templateUrl: './buy10tokens.component.html',
  styleUrls: ['./buy10tokens.component.css']
})

export class Buy10tokensComponent implements OnInit {

  cb: any;
  connectedUser: any;

  // Definition des expressions regulieres pour la validation de l'input
  regexNom = new RegExp('[a-zA-Z]+');
  regexCarte = new RegExp('[0-9]{16}$');
  regexCVC = new RegExp('[0-9]{3}$');
  regexMM = new RegExp('(0[1-9]|1[0-2])$');
  regexYYYY = new RegExp('[0-9]{4}$');
  regexPrepayee = new RegExp('[a-zA-Z]{3}-[a-zA-Z]{3}-[a-zA-Z]{3}$');

  // Definition des messages d'erreur selon l'input
  msgAttributManquant = "Un attribut est manquant";
  msgNomIncorrect = "Le nom du détenteur n'est pas valide";
  msgCarteIncorrecte = "Le numéro de carte n'est pas valide. Il doit contenir 16 chiffres";
  msgCVCIncorrect = "Le CVC est incorrect. Il se situe au dos de votre carte";
  msgDateIncorrecte = "Merci d'entrer une date d'expiration valide au format MM/YYYY (ex. 05/2024)";
  msgPrepayeeIncorrecte = "Le numéro de carte prépayée est incorrect";


  constructor(private http: HttpClient, public authService: AuthService, public buytokenService: BuyTokenService, private host: HostService, private route: Router) { }

  ngOnInit(): void {
    if(!this.authService.isConnected()){
      this.route.navigateByUrl('login');
      this.authService.msgErr = "Veuillez vous connecter";
    }
  }

  pay10(val: any) {
    this.cb = val;
    // Clear des differents messages
    this.buytokenService.msgErrCB10 = '';
    this.buytokenService.msgOKCB10 = '';
    this.buytokenService.msgErrPrepayee10 = '';
    this.buytokenService.msgOKPrepayee10 = '';

    console.log(this.cb.nom);
    console.log(this.cb.numcarte);
    console.log(this.cb.moisexp);
    console.log(this.cb.anexp);
    console.log(this.cb.cvc);
    console.log(this.cb.carteprepayee);

    // Si un attribut est manquant 
    if (this.cb.nom == "" || this.cb.numcarte == "" || this.cb.cvc == "" || this.cb.moisexp == "" || this.cb.anexp == "" || this.cb.prepayee == "") {
      this.buytokenService.msgErrPrepayee10 = this.msgAttributManquant;
      this.buytokenService.msgErrCB10 = this.msgAttributManquant;
    } else {
      
      // Differents problemes d'input
      if (!this.regexNom.test(this.cb.nom)) {
        this.buytokenService.msgErrCB10 = this.msgNomIncorrect;
      }
      if (!this.regexCarte.test(this.cb.numcarte)) {
        this.buytokenService.msgErrCB10 = this.msgCarteIncorrecte;
      }
      if (!this.regexCVC.test(this.cb.cvc)) {
        this.buytokenService.msgErrCB10 = this.msgCVCIncorrect;
      }
      if (!this.regexMM.test(this.cb.moisexp)) {
        this.buytokenService.msgErrCB10 = this.msgDateIncorrecte;
      }
      if (!this.regexYYYY.test(this.cb.anexp)) {
        this.buytokenService.msgErrCB10 = this.msgDateIncorrecte;
      }
      if (!this.regexPrepayee.test(this.cb.carteprepayee)) {
        this.buytokenService.msgErrPrepayee10 = this.msgPrepayeeIncorrecte;
      }

      if (this.cb.nom == "" || this.cb.numcarte == "" || this.cb.cvc == "" || this.cb.moisexp == "" || this.cb.anexp == "" && this.cb.prepayee != "" && !this.regexPrepayee.test(this.cb.carteprepayee)) {
        this.buytokenService.msgErrPrepayee10 = this.msgPrepayeeIncorrecte;
      }

      // Succes 
      if ((this.regexNom.test(this.cb.nom) && this.regexCarte.test(this.cb.numcarte)
        && this.regexCVC.test(this.cb.cvc) && this.regexMM.test(this.cb.moisexp)
        && this.regexYYYY.test(this.cb.anexp)) || (this.regexPrepayee.test(this.cb.carteprepayee))) {
        this.http.patch(this.host.myDevHost +'token/add/10/' + this.authService.getUserSession().id, val).subscribe({
          next: (data) => {
            
            // Achat par CB
            if (this.regexNom.test(this.cb.nom) && this.regexCarte.test(this.cb.numcarte)
              && this.regexCVC.test(this.cb.cvc) && this.regexMM.test(this.cb.moisexp)
              && this.regexYYYY.test(this.cb.anexp)) {
              this.buytokenService.msgErrCB10 = "";
              this.buytokenService.msgOKCB10 = "Merci pour votre achat !";
            }

            // Achat par carte prepayee
            if (this.regexPrepayee.test(this.cb.carteprepayee)) {
              this.buytokenService.msgErrPrepayee10 = "";
              this.buytokenService.msgOKPrepayee10 = "Merci pour votre achat !";
            }

           this.connectedUser = this.authService.getUserSession();
           this.connectedUser.nbPoint = this.connectedUser.nbPoint + 2;
           this.connectedUser.nbToken = this.connectedUser.nbToken + 10;
           this.authService.setUserInSession(this.connectedUser);

          },
        })
      }
    }
  }
}
