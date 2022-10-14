import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-achat-tokens',
  templateUrl: './achat-tokens.component.html',
  styleUrls: ['./achat-tokens.component.css']
})
export class AchatTokensComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // TODO : ADD A NEW COMPONENT FOR THE DIALOG 
  openDialog(): void {
    const dial = this.dialog.open(AchatTokensComponent, {
      width: '250px',
    });
  }

}
