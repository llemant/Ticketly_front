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
  constructor(private http: HttpClient, private host: HostService, public authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    if(!this.authService.isConnected()){
      this.route.navigateByUrl('login');
      this.authService.msgErr = "Veuillez vous connecter";
    } else {
    this.recupMesAmis();
    }
  }

  recupMesAmis() {
    this.http.get(this.host.myDevHost + 'amis/' + this.authService.getUserSession().id).subscribe({
      next: (data) => { this.amis = data; },

    });
  }

  returnImageMascOrFemi(u: any) {
    let f = "/assets/1.png";
    let m = "/assets/2.png";
    if (u.sexe == 'M') {
      return m;
    } else {
      return f;
    }
  }

  deleteAmis(ami: any) {
    this.http.delete(this.host.myDevHost + 'amis/' + this.authService.getUserSession().id + '/' + ami.id).subscribe({
      next: (data) => { this.ngOnInit() },
      error: (err) => { console.log(err); }
    });
  }


}
