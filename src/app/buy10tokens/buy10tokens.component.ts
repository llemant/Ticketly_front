import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BuyTokenService } from '../services/buytoken.service';

@Component({
  selector: 'app-buy10tokens',
  templateUrl: './buy10tokens.component.html',
  styleUrls: ['./buy10tokens.component.css']
})

export class Buy10tokensComponent implements OnInit {

  cb: any;

  regexNom = new RegExp('[a-zA-Z]+');
  regexCarte = new RegExp('[0-9]{16}$');
  regexCVC = new RegExp('[0-9]{3}$');
  regexMM = new RegExp('(0[1-9]|1[0-2])$');
  regexYYYY = new RegExp('[0-9]{4}$');
  regexPrepayee = new RegExp('[a-zA-Z]{3}-[a-zA-Z]{3}-[a-zA-Z]{3}$');

  msgAttributManquant = "Un attribut est manquant";
  msgNomIncorrect = "Le nom du détenteur n'est pas valide";
  msgCarteIncorrecte = "Le numéro de carte n'est pas valide. Il doit contenir 16 chiffres";
  msgCVCIncorrect = "Le CVC est incorrect. Il se situe au dos de votre carte";
  msgDateIncorrecte = "Merci d'entrer une date d'expiration valide au format MM/YYYY (ex. 05/2024)";
  msgPrepayeeIncorrecte = "Le numéro de carte prépayée est incorrect";


  constructor(private http: HttpClient, public authService: AuthService, public buytokenService: BuyTokenService) { }

  ngOnInit(): void {
  }

  pay10(val: any) {
    this.cb = val;
    this.buytokenService.msgErrCB = '';
    this.buytokenService.msgOKCB = '';
    this.buytokenService.msgErrPrepayee = '';
    this.buytokenService.msgOKPrepayee = '';
    
    console.log(this.cb.nom);
    console.log(this.cb.numcarte);
    console.log(this.cb.moisexp);
    console.log(this.cb.anexp);
    console.log(this.cb.cvc);
    console.log(this.cb.carteprepayee);

    if (this.cb.nom == "" || this.cb.numcarte == "" || this.cb.cvc == "" || this.cb.moisexp == "" || this.cb.anexp == "" || this.cb.prepayee == "") {
      this.buytokenService.msgErrPrepayee = this.msgAttributManquant;      
      this.buytokenService.msgErrCB = this.msgAttributManquant;
      
    } else {
      if (!this.regexNom.test(this.cb.nom)) {
        this.buytokenService.msgErrCB = this.msgNomIncorrect;
      }
      if (!this.regexCarte.test(this.cb.numcarte)) {
        this.buytokenService.msgErrCB = this.msgCarteIncorrecte;
      }
      if (!this.regexCVC.test(this.cb.cvc)) {
        this.buytokenService.msgErrCB = this.msgCVCIncorrect;
      }
      if (!this.regexMM.test(this.cb.moisexp)) {
        this.buytokenService.msgErrCB = this.msgDateIncorrecte;
      }
      if (!this.regexYYYY.test(this.cb.anexp)) {
        this.buytokenService.msgErrCB = this.msgDateIncorrecte;
      }
      if (!this.regexPrepayee.test(this.cb.carteprepayee)) {
        this.buytokenService.msgErrPrepayee = this.msgPrepayeeIncorrecte;
      }

      if (this.cb.nom == "" || this.cb.numcarte == "" || this.cb.cvc == "" || this.cb.moisexp == "" || this.cb.anexp == "" && this.cb.prepayee != "" && !this.regexPrepayee.test(this.cb.carteprepayee)) {
        this.buytokenService.msgErrPrepayee = this.msgPrepayeeIncorrecte;
      }

      if (this.regexPrepayee.test(this.cb.carteprepayee)) {
      this.http.patch('http://localhost:8287/token/add/10/' + this.authService.getUserSession().id, val).subscribe({
        next: (data) => {
          this.buytokenService.msgErrPrepayee = "";
          this.buytokenService.msgOKPrepayee = "Merci pour votre achat !";
        },
      })

      if (this.regexNom.test(this.cb.nom) && this.regexCarte.test(this.cb.numcarte)
        && this.regexCVC.test(this.cb.cvc) && this.regexMM.test(this.cb.moisexp)
        && this.regexYYYY.test(this.cb.anexp)) {
        this.http.patch('http://localhost:8287/token/add/10/' + this.authService.getUserSession().id, val).subscribe({
          next: (data) => {
            this.buytokenService.msgErrCB = "";
            this.buytokenService.msgOKCB = "Merci pour votre achat !";
          },
        })

      }
    }
  }
}
}
