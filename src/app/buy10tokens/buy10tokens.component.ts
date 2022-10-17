import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-buy10tokens',
  templateUrl: './buy10tokens.component.html',
  styleUrls: ['./buy10tokens.component.css']
})

export class Buy10tokensComponent implements OnInit {
  
  regexNom = new RegExp('[a-zA-Z]+');
  regexCarte = new RegExp('^[0-9]{16}$');
  regexCVC = new RegExp('^[0-9]{3}$');
  regexMM = new RegExp('^(0[1-9]|1[0-2])$');
  regexYYY = new RegExp ('^[0-9]{4]$');
  
  msgAttributManquant = "Un attribut est manquant";
  msgNomIncorrect = "Le nom du détenteur n'est pas valide";
  msgCarteIncorrecte = "Le numéro de carte n'est pas valide. Il doit contenir 16 chiffres"
  msgCVCIncorrect ="Le CVC est incorrect. Il se situe au dos de votre carte"
  msgDateIncorrecte ="Merci d'entrer une date d'expiration valide au format MM/YYYY (ex. 05/2024)"
  

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
  }

// TODO : Ajouter un message "vous avez maintenant X tokens"
  pay10(val:any) {
    this.http.patch('http://localhost:8287/token/add/10/' + this.authService.getUserSession().id , val).subscribe({

    })
  }

}
