import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-buy200tokens',
  templateUrl: './buy200tokens.component.html',
  styleUrls: ['./buy200tokens.component.css']
})
export class Buy200tokensComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
  }

  // TODO : Ajouter un message "vous avez maintenant X tokens"
  pay200(val:any) {
    this.http.patch('http://localhost:8287/token/add/200/' + this.authService.getUserSession().id , val).subscribe({

    })
  }

}
