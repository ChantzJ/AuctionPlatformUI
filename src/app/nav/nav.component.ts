import {Component, Inject, InjectionToken} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {Router} from "@angular/router";

export interface DialogData {
  bidderName: string;
  maxBidAmount: number;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [MatDialog]
})
export class NavComponent {

  bidderName: any;
  maxAutoBidAmount: number;

  welcomeMsg: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog,
              private router: Router) {}


  openDialog(): void {
    const dialogRef = this.dialog.open(LogonDialog, {
      width: '250px',
      data: {bidderName: this.bidderName, animal: this.maxAutoBidAmount}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.bidderName = result.bidderName;
      this.maxAutoBidAmount = result.maxBidAmount;
      console.log(result);
      this.welcomeMsg = "Welcome " + this.bidderName;
    });
  }

  route() {
    this.router.navigate(['/table', { bidderName: this.bidderName, maxAutoBidAmount: this.maxAutoBidAmount }]);
  }
}

@Component({
  selector: 'logon-dialog',
  templateUrl: 'logon-dialog.html',
})
export class LogonDialog {

  constructor(
    public dialogRef: MatDialogRef<LogonDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


