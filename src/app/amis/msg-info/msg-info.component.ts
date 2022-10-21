import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-msg-info',
  templateUrl: './msg-info.component.html',
  styleUrls: ['./msg-info.component.css']
})
export class MsgInfoComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
