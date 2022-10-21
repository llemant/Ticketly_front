import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ajout-ami',
  templateUrl: './ajout-ami.component.html',
  styleUrls: ['./ajout-ami.component.css']
})
export class AjoutAmiComponent implements OnInit {

  constructor(public authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    if(!this.authService.isConnected()){
      this.route.navigateByUrl('login');
      this.authService.msgErr = "Veuillez vous connecter";
    }
  }

  ajoutAmi(login: any){
    
  }

}
