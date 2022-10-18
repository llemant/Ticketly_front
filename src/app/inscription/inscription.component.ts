import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BddService } from '../services/bdd.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user: any;
  msg: any;
  existingLogin: any;
  existingEmail: any;

  regexTel = new RegExp('(0|\\+33|0033)[1-9][0-9]{8}?$');
  regexMail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
  regexPw = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\.!@#$%^&*])(?=.{8,})");

  msgAttributManquant = "Un attribut est manquant";
  msgTelIncorrect = "Le format du numéro de téléphone est incorrect";
  msgEmailIncorrect = "Le format de l'email est incorrect";
  msgPSWIncorrect = "Le format du mot de passe est incorrect : il doit contenir au moins 8 caractères dont un chiffre, une majuscule, une minuscule et un caractère spécial";
  msgLoginExists = "Cet identifiant n'est pas disponible";
  msgEmailExists = "Cet email est déjà utilisé";

  // la vérification de l'unicité des login et email est en commentaire car non fonctionnelle, on y reviendra si on a le temps
  constructor(private http: HttpClient, private route: Router, public authService: AuthService, public bddService: BddService) { }

  ngOnInit(): void {
  }

  /*
  LoginUnique(){
    this.http.get('http://localhost:' + this.bddService.bddPort + '/user/login/' + this.user.login).subscribe({
        next: (data) => {this.existingLogin = data},
        error: (err) => {console.log(err);}
      })
  }
  EmailUnique(){
    this.http.get('http://localhost:' + this.bddService.bddPort + '/user/email/' + this.user.email).subscribe({
        next: (data) => {this.existingEmail = data},
        error: (err) => { console.log(err);}
      })
  }
  */

  inscription(val: any) {
    this.user = val;

    if (this.user.nom == "" || this.user.prenom == "" || this.user.login == "" || this.user.password == "" || this.user.tel == "" || this.user.email == "") {
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

      /*
      if (this.LoginUnique() != null) {
        this.authService.msgErr = this.msgLoginExists;
      }
      
      if (this.EmailUnique() != null) {
        this.authService.msgErr = this.msgEmailExists;
      }
      */

      if (this.regexTel.test(this.user.tel) &&
        this.regexMail.test(this.user.email) &&
        this.regexPw.test(this.user.password)
        /*
        &&
        this.LoginUnique() == null &&
        this.EmailUnique() == null
        */
      ) {
        this.http.post('http://localhost:' + this.bddService.bddPort + '/user', val).subscribe({
          next: (data) => {
            this.authService.msgErr = "";
            this.authService.msgOK = "Inscription réussie : veuillez vous connecter";
            this.route.navigateByUrl('login');
          },
          error: (err) => { console.log(err) }
        })
      }
    }
  };
}
