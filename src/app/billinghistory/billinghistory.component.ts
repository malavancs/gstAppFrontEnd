import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-billinghistory',
  templateUrl: './billinghistory.component.html',
  styleUrls: ['./billinghistory.component.css']
})
export class BillinghistoryComponent implements OnInit {


  title: 'GST BILLING APP';
  arrSavedBilling: string[];
  private serviceURL = 'https://gst-billing-backend.herokuapp.com/products/billingHistory';
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
      this.http.get((this.serviceURL)).subscribe(data => {
        console.log(data);
        this.arrSavedBilling = data as string[];
      });
  }

}
