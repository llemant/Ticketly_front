import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Buy100tokensComponent } from '../buy100tokens/buy100tokens.component';
import { Buy10tokensComponent } from '../buy10tokens/buy10tokens.component';
import { Buy200tokensComponent } from '../buy200tokens/buy200tokens.component';

@Component({
  selector: 'app-achat-tokens',
  templateUrl: './achat-tokens.component.html',
  styleUrls: ['./achat-tokens.component.css']
})
export class AchatTokensComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog10(): void {
    const dial = this.dialog.open(Buy10tokensComponent, {
      width: '250px',
    });
  }

  openDialog100(): void {
    const dial = this.dialog.open(Buy100tokensComponent, {
      width: '250px',
    });
  }

  openDialog200(): void {
    const dial = this.dialog.open(Buy200tokensComponent, {
      width: '250px',
    });
  }

}
