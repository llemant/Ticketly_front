import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-buycustomtokens',
  templateUrl: './buycustomtokens.component.html',
  styleUrls: ['./buycustomtokens.component.css']
})
export class BuycustomtokensComponent implements OnInit {

  number = new FormControl('');
  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
  }

  // TODO : Ajouter un message "vous avez maintenant X tokens"
  payCustom(val:any) {

    this.http.patch('http://localhost:8287/token/add/' + this.number.value + '/' + this.authService.getUserSession().id , val).subscribe({

    })
  }

}
