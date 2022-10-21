import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HostService } from 'src/app/services/host.service';

@Component({
  selector: 'app-mes-amis',
  templateUrl: './mes-amis.component.html',
  styleUrls: ['./mes-amis.component.css']
})
export class MesAmisComponent implements OnInit {
  amis: any;
  constructor(private http: HttpClient, private host: HostService, private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    if(!this.authService.isConnected()){
      this.route.navigateByUrl('login');
      this.authService.msgErr = "Veuillez vous connecter";
    }
    this.recupMesAmis();
  }

  recupMesAmis() {
    this.http.get(this.host.myDevHost + 'amis/' + this.authService.getUserSession().id).subscribe({
      next: (data) => { this.amis = data; },
      error: (err) => { console.log(err); }
    });
  }

}
