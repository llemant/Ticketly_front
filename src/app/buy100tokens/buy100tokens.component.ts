import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-buy100tokens',
  templateUrl: './buy100tokens.component.html',
  styleUrls: ['./buy100tokens.component.css']
})
export class Buy100tokensComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
  }

  // TODO : Ajouter un message "vous avez maintenant X tokens"
  pay100(val:any) {
    this.http.patch('http://localhost:8287/token/add/100/' + this.authService.getUserSession().id , val).subscribe({

    })
  }
}
