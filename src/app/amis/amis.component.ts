import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-amis',
  templateUrl: './amis.component.html',
  styleUrls: ['./amis.component.css']
})
export class AmisComponent implements OnInit {
  amis: any;
  constructor(private http: HttpClient, private host: HostService, private authService: AuthService) { }

  ngOnInit(): void {
    this.recupMesAmis();
  }

  recupMesAmis() {
    this.http.get(this.host.myDevHost + 'amis/' + this.authService.getUserSession().id).subscribe({
      next: (data) => { this.amis = data; },
      error: (err) => { console.log(err); }
    });
  }

}
