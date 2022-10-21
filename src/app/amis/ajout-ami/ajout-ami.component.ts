import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { HostService } from 'src/app/services/host.service';
import { MsgInfoComponent } from '../msg-info/msg-info.component';

@Component({
  selector: 'app-ajout-ami',
  templateUrl: './ajout-ami.component.html',
  styleUrls: ['./ajout-ami.component.css']
})
export class AjoutAmiComponent implements OnInit {
  durationInSeconds = 4;
  demande: any;
  constructor(private http: HttpClient, private host: HostService, public authService: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  ajoutAmi(log: any) {
    let demande = { demandeur: this.authService.getUserSession(), receveur: { login: log } };
    this.http.post(this.host.myDevHost + 'amis', demande).subscribe({
      next: (data) => { this.demande = data; if (this.demande != null) { this.authService.demande = true; } else { this.authService.demande = false; } this.openSnackBar() },
      error: (err) => { console.log(err); }
    });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(MsgInfoComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}
