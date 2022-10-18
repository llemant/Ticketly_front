import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {

  constructor(private http: HttpClient, public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  functionObtenir(){
    console.log("function called");
  }
}
