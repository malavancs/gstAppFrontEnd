import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from '../models/product.model';

@Component({
  selector: 'app-searchresult-dialog',
  templateUrl: './searchresult-dialog.component.html',
  styleUrls: ['./searchresult-dialog.component.css']
})
export class SearchresultDialogComponent implements OnInit {
  min: number;
  max: number;
  sessionNumber: number;

  form: FormGroup;
  queryString: string;
  productname: string;
  productcode: string;
  productgst: number;
  productprice: number;
  productquantity: number;
  private arrBirds: any;

  constructor(private  fb: FormBuilder,
              private httpClient: HttpClient,
              private dialogReg: MatDialogRef<SearchresultDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    this.queryString = this.data.anyProperty;

  }

  getDisabledValue() {

    return true;
  }

  randomIntFromInterval() {

    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

  ngOnInit() {
    this.sessionNumber = this.randomIntFromInterval();
    this.httpClient.get('http://localhost:4001/products/searchTerm?name=' + this.queryString)
      .subscribe(data1 => {
        console.log(data1);
        if (!data1) {

        }
        this.arrBirds = data1 as string;
        this.productcode = (this.arrBirds).code;
        this.productprice = Number(this.arrBirds.price);
        this.productquantity = 0;
        this.productname = this.arrBirds.name;
        this.productgst = Number(this.arrBirds.gst);
        console.log(this.arrBirds.name);

        this.form = this.fb.group({
          name: [this.productname, {value: this.productname, disabled: true}],
          price: [this.productprice, {value: this.productprice, disabled: true}],
          code: [this.productcode, {value: this.productcode, disabled: true}],
          gst: [this.productgst, {value: this.productgst, disabled: true}],
          quantity: [this.productquantity]
        });
      });

  }

  close() {


  }

  save() {

    this.httpClient.post('http://localhost:4001/products/addItemToCart', {
      name: this.form.value.name,
      gst: this.form.value.gst,
      code: this.form.value.code,
      price: this.form.value.price,
      sessionid: this.sessionNumber,
      quantity: this.form.value.quantity

    }).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });


    this.dialogReg.close(this.form.value);
  }
}
