import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inscription-organisateur',
  templateUrl: './inscription-organisateur.component.html',
  styleUrls: ['./inscription-organisateur.component.css']
})
export class InscriptionOrganisateurComponent implements OnInit {

  user: any;
  msg: any;

  regexTel = new RegExp('(0|\\+33|0033)[1-9][0-9]{8}?$');
  regexMail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
  regexPw = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\.!@#$%^&*])(?=.{8,})");
  regexSiret = new RegExp('[0-9]{14}?$');

  msgAttributManquant = "Un attribut est manquant";
  msgTelIncorrect = "Le format du numéro de téléphone est incorrect";
  msgEmailIncorrect = "Le format de l'email est incorrect";
  msgPSWIncorrect = "Le format du mot de passe est incorrect : il doit contenir au moins 8 caractères dont un chiffre, une majuscule, une minuscule et un caractère spécial";
  msgSiretIncorrect = "Le format du SIRET est incorrect : il doit contenir 14 chiffres";


  constructor(private http: HttpClient, private route: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  inscriptionOrganisateur(val: any) {
    
    this.user = val;

    if (this.user.nom == "" || this.user.prenom == "" || this.user.login == "" || this.user.password == "" || this.user.tel == "" || this.user.email == "" || this.user.nomEntreprise == "" || this.user.siret == "") {
      this.authService.msgErr = this.msgAttributManquant;
    } else {

      if (!this.regexTel.test(this.user.tel)) {
        this.authService.msgErr = this.msgTelIncorrect;
      }
      if (!this.regexMail.test(this.user.email)) {
        this.authService.msgErr = this.msgEmailIncorrect;
      }
      if (!this.regexPw.test(this.user.password)) {
        this.authService.msgErr = this.msgPSWIncorrect;
      }
      if (!this.regexSiret.test(this.user.siret)) {
        this.authService.msgErr = this.msgSiretIncorrect;
      }

      if (this.regexTel.test(this.user.tel) && this.regexMail.test(this.user.email) && this.regexPw.test(this.user.password) && this.regexSiret.test(this.user.siret)) {
        this.http.post('http://localhost:8287/organisateur', val).subscribe({
          next: (data) => {
            this.authService.msgErr = "";
            this.authService.msgOK = "Inscription réussie : veuillez vous connecter";
            this.route.navigateByUrl('login');
          },
          error: (err) => { console.log(err) }
        })

      }
    };

  }
}
