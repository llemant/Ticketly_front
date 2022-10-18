import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BddService } from '../services/bdd.service';

@Component({
  selector: 'app-modif-compte-orga',
  templateUrl: './modif-compte-orga.component.html',
  styleUrls: ['./modif-compte-orga.component.css']
})
export class ModifCompteOrgaComponent implements OnInit {

  connectedAccount: any;
  user: any;
  msg: any;

  regexTel = new RegExp('(0|\\+33|0033)[1-9][0-9]{8}?$');
  regexMail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
  regexPw = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\.!@#$%^&*])(?=.{8,})");

  msgTelIncorrect = "Le format du numéro de téléphone est incorrect";
  msgEmailIncorrect = "Le format de l'email est incorrect";
  msgPSWIncorrect = "Le format du mot de passe est incorrect : il doit contenir au moins 8 caractères dont un chiffre, une majuscule, une minuscule et un caractère spécial";

  constructor(private http: HttpClient, private route: Router, public authService: AuthService, public bddService: BddService) { }

  ngOnInit(): void {
  }

  modificationOrganisateur(val: any) {

    this.connectedAccount = this.authService.getUserSession();

    this.user = val;

    if (this.user.nom != "") {
      this.connectedAccount.nom = this.user.nom;
    }
    if (this.user.prenom != "") {
      this.connectedAccount.prenom = this.user.prenom;
    }
    if (this.user.login != "") {
      this.connectedAccount.login = this.user.login;
    }
    if (this.user.password != "") {
      this.connectedAccount.password = this.user.password;
    }
    if (this.user.tel != "") {
      this.connectedAccount.tel = this.user.tel;
    }
    if (this.user.email != "") {
      this.connectedAccount.email = this.user.email;
    }
    if (this.user.nomEntreprise != "") {
      this.connectedAccount.nomEntreprise = this.user.nomEntreprise;
    }
    if (this.user.siret != "") {
      this.connectedAccount.siret = this.user.siret;
    }

    if (!this.regexTel.test(this.connectedAccount.tel)) {
      this.authService.msgErr = this.msgTelIncorrect;
    }
    if (!this.regexMail.test(this.connectedAccount.email)) {
      this.authService.msgErr = this.msgEmailIncorrect;
    }
    if (!this.regexPw.test(this.connectedAccount.password)) {
      this.authService.msgErr = this.msgPSWIncorrect;
    }

    if (this.regexTel.test(this.connectedAccount.tel) &&
      this.regexMail.test(this.connectedAccount.email) &&
      this.regexPw.test(this.connectedAccount.password)) {
      this.http.put('http://localhost:' + this.bddService.bddPort + '/modif/orga/' + this.authService.getUserSession().login, this.connectedAccount).subscribe({
        next: (data) => {
          this.authService.msgErr = "";
          this.authService.msgOK = "Modification réussie";
        },
        error: (err) => { console.log(err) }
      })
    }

  };
}
