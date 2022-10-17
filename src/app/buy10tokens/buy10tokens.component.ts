import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-buy10tokens',
  templateUrl: './buy10tokens.component.html',
  styleUrls: ['./buy10tokens.component.css']
})

export class Buy10tokensComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
  }

// TODO : Ajouter un message "vous avez maintenant X tokens"
  pay10(val:any) {
    this.http.patch('http://localhost:8287/token/add/10/' + this.authService.getUserSession().id , val).subscribe({

    })
  }

}
