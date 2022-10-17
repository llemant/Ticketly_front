import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-buycustomtokens',
  templateUrl: './buycustomtokens.component.html',
  styleUrls: ['./buycustomtokens.component.css']
})
export class BuycustomtokensComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
  }

  // TODO : Ajouter un message "vous avez maintenant X tokens"
  payCustom(val:any) {
    this.http.patch('http://localhost:8287/token/add/10/' + this.authService.getUserSession().id , val).subscribe({

    })
  }

}
