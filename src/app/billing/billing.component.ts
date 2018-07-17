import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {SearchresultDialogComponent} from '../searchresult-dialog/searchresult-dialog.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {


  min: number;
  max: number;
  sessionNumber: number;
  arrBirds: any;
  arrSum: any;

  constructor(private dialog: MatDialog, private http: HttpClient) {
  }

  searchTerm: string;

  ngOnInit() {

    this.sessionNumber = 122;

    this.loadData();
    this.loadSum();

  }

  loadData() {
    this.http.get('http://localhost:4001/products/getAllInCart?sessionid=' + this.sessionNumber)
      .subscribe(data1 => {
        console.log(data1 as string);
        this.arrBirds = data1 as string;

      });
  }

  loadSum() {
    this.http.get('http://localhost:4001/products/getTotalPrice?sessionid=' + this.sessionNumber)
      .subscribe(data1 => {
        console.log(data1 as string);
        this.arrSum = data1 as string;
        console.log(this.arrSum);

      });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      searchQuery: this.searchTerm
    };


    const dialogRef =
      this.dialog.open(SearchresultDialogComponent, {
        data: {
          anyProperty: this.searchTerm
        }
      });


    dialogRef.afterClosed().subscribe(
      data => {
        console.log('Dialog output:', data);
        this.ngOnInit();

      }
    );
  }

  searchButton(value: string) {
    this.searchTerm = value;
    this.openDialog();


  }

  makeBill() {
    console.log('Fuck off');
    this.http.post('http://localhost:4001/products/makeBill', {
      billid: this.sessionNumber,
      details: 'ProductDetails',
      totalprice: this.arrSum.TotalSum
    }).subscribe(data => {
      console.log(data);
    });
  }

  randomIntFromInterval() {

    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
}
