import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { CreatelieuService } from '../services/createlieu.service';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-lieu',
  templateUrl: './lieu.component.html',
  styleUrls: ['./lieu.component.css']
})
export class LieuComponent implements OnInit {
  lieu: any;
  msg: any;

  msgAttributAbsent = "Un attribut est absent dans le formualire";
  msgPaysIncorrect = "Le pays que vous avez saisi n'est pas correct";
  msgVilleIncorrect = "La ville que vous avez n'est pas correcte";

    // Regex pour gérer le nom des pays
  regexPays = new RegExp("'#^([A-Za-z, ])*$#', $pays");
 
  // Regex pour gérer le nom des villes
  regexVille = new RegExp ("^[a-zA-Z\\u0080-\\u024F.]+((?:[ -.|'])[a-zA-Z\\u0080-\\u024F]+)*$");


  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private host: HostService, public createlieuService: CreatelieuService) { }

  ngOnInit(): void {
  }

  lieuevent(val:any){
    this.lieu = val;

    if (this.lieu.pays == "" || this.lieu.ville == "" || this.lieu.adresse == "" || this.lieu.nom == "" || this.lieu.capacity) {
      this.createlieuService.msgErr = this.msgAttributAbsent;
    } else {

    if (!this.regexPays.test(this.lieu.pays)) {
      this.createlieuService.msgErr = this.msgPaysIncorrect;
    }
    if (!this.regexVille.test(this.lieu.ville)) {
      this.createlieuService.msgErr = this.msgVilleIncorrect;
    }
    if (this.regexPays.test(this.lieu.pays) &&
    this.regexVille.test(this.lieu.ville)
    ) {
      this.http.post(this.host.myDevHost + 'lieu', val).subscribe({
          next: (data) => {
            this.createlieuService.msgErr = "";
            this.createlieuService.msgOK = "Créaton de lieu d'événement réussie";
            this.route.navigateByUrl('event');
          },
          error: (err) => { console.log(err) }
        })

  }
  }
}
}
