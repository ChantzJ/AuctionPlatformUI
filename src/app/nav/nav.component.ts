import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {HomeService} from '../services/auction.service';

export interface DialogData {
  userId: number;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [MatDialog, HomeService]
})
export class NavComponent {

  bidderName: any;
  maxAutoBidAmount: number;
  userId: number;
  loggedIn = false;

  welcomeMsg: any;
  maxAutoMsg: any;

  constructor(public dialog: MatDialog, private router: Router, private homeService: HomeService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LogonDialog, {
      width: '250px',
      data: {userId: this.userId}
    });

    dialogRef.afterClosed().subscribe(result => {

      this.homeService.login(result.userId).subscribe(
        data => {
          this.bidderName = data.bidderName;
          this.maxAutoBidAmount = data.maxAutoBidAmount;
          this.welcomeMsg = 'Welcome ' + data.bidderName;
          this.maxAutoMsg = 'Max Auto: ' + data.maxAutoBidAmount;
          this.loggedIn = true;
        }
      );

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


